@echo off
cd /d "%~dp0"
echo.
echo  Studio Senato - tecnico informatico
echo  Su questo PC: http://127.0.0.1:8765/studio/
echo  Dagli altri dispositivi, sulla stessa rete Wi-Fi:
powershell -NoProfile -Command "Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } | ForEach-Object { '  http://' + $_.IPAddress + ':8765/studio/' }"
echo.
echo  I segni di studio restano nel browser di ciascun dispositivo.
echo  Per chiudere lo studio, chiudi questa finestra oppure premi Ctrl+C.
echo.

netsh advfirewall firewall show rule name="Studio Senato 8765" >nul 2>&1
if errorlevel 1 (
  echo  Per aprire lo studio dal telefono, conferma la richiesta di Windows.
  powershell -NoProfile -Command "Start-Process -FilePath netsh -Verb RunAs -Wait -ArgumentList 'advfirewall firewall add rule name=\"Studio Senato 8765\" dir=in action=allow protocol=TCP localport=8765 profile=private remoteip=localsubnet'"
  echo.
)

netstat -ano | findstr ":8765" | findstr "LISTENING" >nul
if %errorlevel%==0 (
  echo  Lo studio e' gia' in esecuzione. Apro solo il browser, senza un secondo server.
  start "" http://127.0.0.1:8765/studio/index.html
  echo.
  pause
  exit /b 0
)

start "" http://127.0.0.1:8765/studio/index.html
python -m http.server 8765 --bind 0.0.0.0
if errorlevel 1 (
  echo.
  echo  Python non e' partito. Installa Python 3 oppure avvia a mano, da questa cartella:
  echo  python -m http.server 8765 --bind 0.0.0.0
  pause
)

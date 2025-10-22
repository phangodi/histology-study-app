@echo off
echo ===================================
echo COMPLETE CLEAN RESTART
echo ===================================
echo.
echo Step 1: Killing any existing Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 >nul

echo.
echo Step 2: Clearing npm cache...
cd /d "c:\Users\hpeti\Downloads\WindSurf\Histology"
npm cache clean --force

echo.
echo Step 3: Deleting node_modules and dist...
if exist node_modules rmdir /s /q node_modules
if exist dist rmdir /s /q dist
if exist .vite rmdir /s /q .vite

echo.
echo Step 4: Reinstalling dependencies...
npm install

echo.
echo Step 5: Starting dev server...
npm run dev

pause

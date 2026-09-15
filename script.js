// Clock functionality
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const timeStr = `${hours}:${minutes}`;

  document.getElementById('clock').innerText = timeStr;
  document.getElementById('large-time').innerText = timeStr;
}

setInterval(updateClock, 1000);
updateClock();

// Window management
function openApp(appName) {
  document.getElementById('app-title').innerText = appName;
  document.getElementById('app-body').innerText = `Running ${appName} in AmeOS environment...`;
  document.getElementById('app-window').classList.remove('hidden');
}

function closeApp() {
  document.getElementById('app-window').classList.add('hidden');
}

// Файл: script.js

function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const localeDate = now.toLocaleDateString('ru-RU', options);

  clock.textContent = now.toLocaleTimeString('ru-RU');
  date.textContent = localeDate.charAt(0).toUpperCase() + localeDate.slice(1);
}

setInterval(updateClock, 1000);
updateClock();


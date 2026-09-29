var app = (function() {
  'use strict';

  document.querySelectorAll('.device-toggle').forEach(function(toggle) {
    toggle.setAttribute('aria-label', toggle.dataset.device + ': ' + toggle.value);

    toggle.addEventListener('change', function() {
      var isOn = toggle.checked;

      toggle.value = isOn ? 'on' : 'off';
      toggle.setAttribute('aria-label', toggle.dataset.device + ': ' + toggle.value);

      var icon = toggle.closest('li').querySelector('i');
      if (toggle.dataset.deviceType === 'music') {
        icon.classList.toggle('fa-music', isOn);
        icon.classList.toggle('fa-volume-xmark', !isOn);
        icon.classList.toggle('text-primary', isOn);
        icon.classList.toggle('text-secondary', !isOn);
      } else {
        icon.classList.toggle('fas', isOn);
        icon.classList.toggle('far', !isOn);
        icon.classList.toggle('text-warning', isOn);
        icon.classList.toggle('text-secondary', !isOn);
      }
    });
  });

  function updateClock() {
    var now = new Date();
    var hours = String(now.getHours()).padStart(2, '0');
    var minutes = String(now.getMinutes()).padStart(2, '0');
    var seconds = String(now.getSeconds()).padStart(2, '0');
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var day = String(now.getDate()).padStart(2, '0');

    document.querySelector('.current-time').textContent = hours + ':' + minutes + ':' + seconds;
    document.querySelector('.current-date').textContent = now.getFullYear() + '-' + month + '-' + day;
  }

  updateClock();
  window.setInterval(updateClock, 1000);

  window.setInterval(function() {
    document.querySelectorAll('.temperature-value').forEach(function(element) {
      var temperature = (Math.random() * 20 + 10).toFixed(1);
      element.textContent = temperature + ' °C';
    });
  }, 5000);

}) ();
// assign button handlers
window.onload = function() {
  document.getElementById('celsius-button').addEventListener('pointerdown', function() {
    let userFahrenheit = window.prompt('Enter degrees Fahrenheit:');
    let converted = fahrenheitToC(userFahrenheit);
    if (userFahrenheit) {
      document.getElementById('output-area').innerHTML = converted + "°C";
    }

  });
  document.getElementById('fahrenheit-button').addEventListener('pointerdown', function() {
    let userCelsius = window.prompt('Enter degrees Celsius:');
    let converted = celsiusToF(userCelsius);
    if (userCelsius) {
      document.getElementById('output-area').innerHTML = converted + "°F";
    }
  });
}

// business logic

function celsiusToF(fahrenheit) {
  return (fahrenheit * (9/5)) + 32;
}
function fahrenheitToC(celsius) {
  return (celsius - 32) * (5/9);
}


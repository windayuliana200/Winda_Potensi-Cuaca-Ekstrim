document.addEventListener("DOMContentLoaded", function() {
    var dateElement = document.getElementById("date");
    var weatherElement = document.getElementById("weather");
    var temperatureElement = document.getElementById("temperature");
    var humidityElement = document.getElementById("humidity");
    var windElement = document.getElementById("wind");

    // Simulasi data cuaca
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var formattedDate = day + "/" + month + "/" + year + " " + hours + ":" + (minutes < 10 ? '0' : '') + minutes;
    var weather = "Cerah";
    var temperature = "28°C";
    var humidity = "65%";
    var wind = "5 km/jam";

    // Menampilkan data cuaca
    dateElement.textContent = formattedDate;
    weatherElement.textContent = weather;
    temperatureElement.textContent = temperature;
    humidityElement.textContent = humidity;
    windElement.textContent = wind;
});
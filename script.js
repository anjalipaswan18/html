if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
}
document.getElementById("loader").style.display = "block";
document.getElementById("weathercontainer").style.display = "none";
const KELVIN = 273;
function showPosition(position) {
  const lat = +position.coords.latitude;
  const long = +position.coords.longitude;
  console.log("Latitude: " + lat + " " + "Longitude: " + long);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=82005d27a116c2880c8f0fcb866998a0`
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      document.getElementById("loader").style.display = "none";
      document.getElementById("weathercontainer").style.display = "block";
      temperature = document.getElementById("temperature-value").innerHTML =
        data.main.temp;
      celsius = temperature - KELVIN;
      decimal = Math.floor(celsius);
      document.getElementById("temperature-value").innerHTML = decimal;
      document.getElementById("location").innerHTML = data.name;
      document.getElementById("img").src = `icons/${data.weather[0].icon}.png`;
      document.getElementById("temperature-description").innerHTML =
        data.weather[0].description;
      console.log(data);
    });
}

let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=82005d27a116c2880c8f0fcb866998a0`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const { name } = data;
          const { feels_like } = data.main;
          const { main } = data.weather[0];
          loc.textContent = name;
          climate.textContent = main;
          tempvalue.textContent = Math.round(feels_like - 273);
          document.getElementById(
            "img"
          ).src = `icons/${data.weather[0].icon}.png`;
          console.log(data);
        });
    });
  }
});

const API_KEY = "4b32bc2679bc87db3ccee0d44e4f5bd7";

function onGeoWorking(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector('.weather span:first-child');
            const city = document.querySelector('.weather span:last-child');
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/${data.main.temp}°C`;
        });
}

function onGeoError() {
    alert("Can't access your location")
}

navigator.geolocation.getCurrentPosition(onGeoWorking, onGeoError)

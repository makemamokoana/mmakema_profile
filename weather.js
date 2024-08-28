const weatherElement = document.getElementById('weather');
const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const city = data.name;
            weatherElement.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>${description}</p>
                <p>Temperature: ${temperature}°C</p>
            `;
        })
        .catch(error => {
            weatherElement.innerHTML = 'Error fetching weather data.';
            console.error('Error:', error);
        });
}

function handleGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeather(lat, lon);
}

function handleGeoError() {
    weatherElement.innerHTML = 'Unable to retrieve your location.';
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
} else {
    weatherElement.innerHTML = 'Geolocation is not supported by this browser.';

}





document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.querySelector('.slides');
    const container = document.getElementById('slideshow');
    let isPaused = false;
  
    container.addEventListener('click', () => {
      if (isPaused) {
        slideshow.style.animationPlayState = 'running';
      } else {
        slideshow.style.animationPlayState = 'paused';
      }
      isPaused = !isPaused;
    });
  });
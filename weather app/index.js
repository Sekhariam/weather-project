var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var descripElement = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "d766e2fc6ad1c1e63c876693a94e0bc9";

function convertion(val) {
    return (val - 273.15).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            var nameval = data['name'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var wndspeed = data['wind']['speed'];

            city.innerHTML = `Weather of <span>${nameval}</span>`;
            temp.innerHTML = `Temperature: <span>${convertion(temperature)}°C</span>`;
            descripElement.innerHTML = `Sky conditions: <span>${descrip}</span>`;
            wind.innerHTML = `Wind speed: <span>${wndspeed} km/h</span>`;
        })
        .catch(err => alert('You entered Wrong City name'));
});

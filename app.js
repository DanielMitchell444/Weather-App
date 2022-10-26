
var city = document.querySelector('#city-output');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var weather = document.querySelector('#weather');
var wind = document.querySelector('#wind');
var apik = "3045dd712ffe6e702e3245525ac7fa38";
var windSpeed = document.querySelector('#windSpeed');
var display = document.querySelector('.display');
var main = document.querySelector('.main');
var container = document.querySelector('.container');
var stuff = document.querySelector('stuff');
var humidity = document.querySelector('#humidity');
var feelsLike = document.querySelector('#feels-like')
var container2 = document.querySelector('.container2');
;
//Conversion function
function convertion(val)
{
    return (val - 273).toFixed(2)
}

//Async Function //

async function getData() {
  const inputVal = document.querySelector('#cityInput');
  await fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid='+apik)
  .then(res => res.json())

  .then(data => {

    console.log(data);

    const nameValue = data['name'];
    const tempValue = data['main']['temp'];
    const weatherValue = data['weather']['0']['description'];
    const windSpeedValue = data['wind']['speed'];
    const feelsLikeValue = data['main']['feels_like'];
    const humidityValue = data['main']['humidity'];

    city.innerHTML = `Weather of ${nameValue}`;
    temp.innerHTML = `Temp: ${convertion(tempValue)} C`;
    weather.innerHTML = `Weather: ${weatherValue}`;
    wind.innerHTML = `Wind Speed: ${windSpeedValue} %` ;
    humidity.innerHTML = `Humidity: ${humidityValue} %`;
    

    display.style.display = "block";

  })
}





add.addEventListener('click', getData);


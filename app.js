
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
    var nameval = data['name']
    var descrip = data['weather']['0']['description']
    var tempature = data['main']['temp']
    var wndspd = data['wind']['speed']
  
    
    city.innerHTML=`Weather of <span>${nameval}<span>`
    temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`


    display.style.display = "block";
  })
}





add.addEventListener('click', getData);


const cityName=document.getElementById("city-name")
const weatherType=document.getElementById("weather-type")
const minTemp=document.getElementById("min-temp")
const maxTemp=document.getElementById("max-temp")

let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";


getWeatherData = (city) => {
  
  
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3bdbf48d16msh07d761acc6d3729p11e4e1jsn6d54e7f116a3',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
	.then(response => response.json())
	.then(data =>data)
	.catch(err => console.error(err));
  
}


const searchCity =async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
 const data= await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
  console.log(weatherData,"cookie")
  console.log(weatherData.main.temp)
  document.getElementById("temp").innerText=weatherData.main.temp
  document.getElementById("city-name").innerText=weatherData.name
  document.getElementById("weather-type").innerText=weatherData.weather[0].main
  document.getElementById("min-temp").innerText=weatherData.main.temp_min
  document.getElementById("max-temp").innerText=weatherData.main.temp_max
  
}


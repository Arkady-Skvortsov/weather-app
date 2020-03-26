let input_p = document.querySelector('#query');
let search_button = document.querySelector('.search');

const api = {
	key: "40056357938151c60307ff79f51641b6",
	base: "https://api.openweathermap.org/data/2.5/",
};

search_button.addEventListener('click', () => {
     fetch(`${api.base}weather?q=${input_p.value}&units=metric&APPID=${api.key}`)
          .then(weather => {
      	     return weather.json();
          }).then(GetRequest);

      input_p.value = "";
});

function GetRequest(weather) {
	let name = document.querySelector('#name');
	let time = document.querySelector('#time');
	let gradyz = document.querySelector('.gradyz');
	let status = document.querySelector('.status');
	let weather_icon = document.querySelector('.weather_icon');
	let data = new Date();
	let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', "Friday", "Saturday"];
	let month = ['January', 'February', "March", "April", "May", "June", 'July', "August", "September", "November", "December"];


	name.innerHTML = `${weather.name}, ${weather.sys.country}`;
	gradyz.textContent = `${Math.round(weather.main.temp)}*c`;
	status.textContent = `${weather.weather[0].description}`;
	time.innerHTML = `${days[data.getDay()]} ${data.getDate()} ${month[data.getMonth()]} ${data.getFullYear()}`;
	
	switch(weather.weather[0].main) {
		case "Clouds": 
		    weather_icon.children[0].className = 'fas fa-cloud';
            weather_icon.children[0].classList.add('cloud');
		break;
		case "Clear": 
		    weather_icon.children[0].className = 'fas fa-wind';
		    weather_icon.children[0].classList.add('wind');
		break;
		case "Rain": 
		    weather_icon.children[0].className = 'fas fa-cloud-rain';
		    weather_icon.children[0].classList.add('usually_rain');
		break;
		case "Snow":
		    weather_icon.children[0].className = 'fas fa-snowflake';
		    weather_icon.children[0].classList.add('snowflake');
		break;
	} //Почти закончил.. Осталось посмотреть какая еще бывает погода) и сделать систему показа вермени с названием дня недели и названием месяца
} 
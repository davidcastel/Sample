console.log("bob");
import DarkSkyApi from 'dark-sky-api';


DarkSkyApi.apiKey = '057a37576653d3034012df6497a968de';

DarkSkyApi.proxy = true; 

DarkSkyApi.units = 'si'; // default 'us'
DarkSkyApi.language = 'de'; // default 'en'
DarkSkyApi.postProcessor = (item) => { // default null;
	item.day = item.dateTime.format('ddd');
	return item;
}

DarkSkyApi.loadCurrent()
	.then(result => console.log(result));

DarkSkyApi.loadForecast()
	.then(result => console.log(result));

//let lat,lon;
//if('geolocation' in navigator){
//	console.log('geolocation available');
//	navigator.geolocation.getCurrentPosition(async position =>{
//		lat = position.coords.latitude;
//		lon = position.coords.longitude;
//
//		//		document.getElementById('latitude').textContent = lat.toFixed(2);
//		//		document.getElementById('longitude').textContent = lon.toFixed(2);
//
//		//const api_url ='https://api.darksky.net/forecast/057a37576653d3034012df6497a968de/${lat},${lon}';
//		const api_url = `weather/${lat},${lon}`;
//		const response = await fetch(api_url);
//		const json = await response.json();
//
//		//		document.getElementById('summary').textContent = json.currently.summary;
//		document.getElementById('temperature').textContent = json.currently.temperature;
//		document.getElementById('icon').textContent = json.currently.icon;
//
//		console.log(json);
//	});
//} else {
//	console.log('geolocation not available');
//}

//fetch('https://api.darksky.net/forecast/057a37576653d3034012df6497a968de/37.8267,-122.4233',{mode: 'no-cors'})
//	.then(function(response){
//	return response.json();
//})
//	.then(function(myJson){
//	console.log(JSON.stringify(myJson));
//});
//
//
//function 

//const fetchweather = () => {
//	const api_url = 'https://api.darksky.net/forecast/057a37576653d3034012df6497a968de/37.8267,-122.4233'
//	.then((data) =>{
//		return data.json();
//		console.log("work?");
//	})
//	.then((json) => {
//		console.log(json);
//		processJsonResponse(json);
//	})
//}
//
//const processJsonResponse = (jsonData) => {
//	const some_url = jsonData.data[0];
//	const sm = jsonData.data[0];
//	const gif = '<p>' + sm + '</p>';
//	output.innerHTML += gif;
//}
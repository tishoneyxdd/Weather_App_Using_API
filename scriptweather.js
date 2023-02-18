const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'API-Key',
		'X-RapidAPI-Host': 'Host'
	}
};

const getWeather = (city)=>{
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city , options)
	.then(response => response.json())
	.then(response => {     
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        cloud_pct2.innerHTML = response.cloud_pct
        temp1.innerHTML = response.temp
        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed2.innerHTML = response.wind_speed
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
     })
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

//new
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata' , options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pctkol.innerHTML = response.cloud_pct
        tempkol.innerHTML = response.temp
        feels_likekol.innerHTML = response.feels_like
        humiditykol.innerHTML = response.humidity
        min_tempkol.innerHTML = response.min_temp
        max_tempkol.innerHTML = response.max_temp
        wind_speedkol.innerHTML = response.wind_speed
        wind_degreeskol.innerHTML = response.wind_degrees
        sunrisekol.innerHTML = response.sunrise
        sunsetkol.innerHTML = response.sunset
    })
	.catch(err => console.error(err));



    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Uttar Pradesh' , options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pctup.innerHTML = response.cloud_pct
        tempup.innerHTML = response.temp
        feels_likeup.innerHTML = response.feels_like
        humidityup.innerHTML = response.humidity
        min_tempup.innerHTML = response.min_temp
        max_tempup.innerHTML = response.max_temp
        wind_speedup.innerHTML = response.wind_speed
        wind_degreesup.innerHTML = response.wind_degrees
        sunriseup.innerHTML = response.sunrise
        sunsetup.innerHTML = response.sunset
    })
	.catch(err => console.error(err));


    
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Gujrat' , options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pctguj.innerHTML = response.cloud_pct
        tempguj.innerHTML = response.temp
        feels_likeguj.innerHTML = response.feels_like
        humidityguj.innerHTML = response.humidity
        min_tempguj.innerHTML = response.min_temp
        max_tempguj.innerHTML = response.max_temp
        wind_speedguj.innerHTML = response.wind_speed
        wind_degreesguj.innerHTML = response.wind_degrees
        sunriseguj.innerHTML = response.sunrise
        sunsetguj.innerHTML = response.sunset
    })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai' , options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pctchen.innerHTML = response.cloud_pct
        tempchen.innerHTML = response.temp
        feels_likechen.innerHTML = response.feels_like
        humiditychen.innerHTML = response.humidity
        min_tempchen.innerHTML = response.min_temp
        max_tempchen.innerHTML = response.max_temp
        wind_speedchen.innerHTML = response.wind_speed
        wind_degreeschen.innerHTML = response.wind_degrees
        sunrisechen.innerHTML = response.sunrise
        sunsetchen.innerHTML = response.sunset
    })
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Himachal Pradesh' , options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        cloud_pctHP.innerHTML = response.cloud_pct
        tempHP.innerHTML = response.temp
        feels_likeHP.innerHTML = response.feels_like
        humidityHP.innerHTML = response.humidity
        min_tempHP.innerHTML = response.min_temp
        max_tempHP.innerHTML = response.max_temp
        wind_speedHP.innerHTML = response.wind_speed
        wind_degreesHP.innerHTML = response.wind_degrees
        sunriseHP.innerHTML = response.sunrise
        sunsetHP.innerHTML = response.sunset
    })
	.catch(err => console.error(err));

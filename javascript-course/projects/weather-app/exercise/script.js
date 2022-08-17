/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */



// DIV ID's  👇
const searchBtn = document.getElementById('searchBtn')
const searchBar = document.getElementById('searchBar')
const temp = document.getElementById('temp')
const condition = document.getElementById('condition')
const hilo = document.getElementById('hilo')

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
 getWeatherData = async (city) => {

    const data = {
        temp: null,
        condition: null,
        high: null,
        low: null
    }
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f065f966b8msh5f03aab0e3f3b77p11c63cjsn9e5b7f86f059',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`, options) //.then equivalent

    const json = await response.json()
    // console.log(json)

    data.temp = json.current.temp_f
    data.condition = json.current.condition.text
    data.high = json.forecast.forecastday[0].day.maxtemp_f
    data.low = json.forecast.forecastday[0].day.mintemp_f

        
    return data
}


/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
    console.log(weatherData)
    temp.innerText = `${weatherData.temp}`
    condition.innerText = `${weatherData.condition}`
    hilo.innerHTML = `Day ${weatherData.high}79&#176; &#8226; Night ${weatherData.low}`    
}

// Retrieve city input and get the weather data
searchBtn.onclick = async () => {
    //getWeatherData(searchBar.value) 
    const data = await getWeatherData(searchBar.value)
    console.log(data)
    console.log(data.temp)
    showWeatherData(data)
}

// columbus

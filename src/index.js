import { getInfoObject, setBackground } from "./api_load";

const degToggler = document.querySelector('.deg-toggler')
const searchButton = document.querySelector('#button')
const input = document.querySelector('#search')

let deg = '°C'
let infoObject = getInfoObject('medellin')
let currentCityObject = {}

function displayInfo(currentCityObject, deg) {
    const name = document.querySelector('.name')
    const country = document.querySelector('.country')
    const temp = document.querySelector('.temp')
    const feelsLikeTemp = document.querySelector('.feels-like')
    const windKph = document.querySelector('.wind')
    const humidity = document.querySelector('.humidity')
    const cloud = document.querySelector('.cloud')
    const icon = document.querySelector('.icon')

    name.textContent = currentCityObject.name
    country.textContent = currentCityObject.country
    if (deg === '°C') {
        temp.textContent = `Temperature: ${currentCityObject.temp_c} °C`
    } else {
        temp.textContent = `Temperature: ${currentCityObject.temp_f} °F`
    }
    if (deg === '°C') {
        feelsLikeTemp.textContent = `Feels like: ${currentCityObject.feelslike_c} °C`
    } else {
        feelsLikeTemp.textContent = `Feels like: ${currentCityObject.feelslike_f} °F`
    }
    windKph.textContent = `Wind: ${currentCityObject.wind_kph} km/h`
    humidity.textContent = `Humidity: ${currentCityObject.humidity} %`
    cloud.textContent = `Clouds: ${currentCityObject.cloud} %`
    icon.src = currentCityObject.icon
}

infoObject
    .then(setBackground(infoObject))
    .then(result => {
        displayInfo(result, deg)
        currentCityObject = result
    })

degToggler.addEventListener('click', () => {
    const temp = document.querySelector('.temp')
    const feelsLikeTemp = document.querySelector('.feels-like')

    if (deg === '°C') {
        deg = '°F'
        degToggler.textContent = deg
        temp.textContent = `Temperature: ${currentCityObject.temp_f} °F`
        feelsLikeTemp.textContent = `Feels like: ${currentCityObject.feelslike_f} °F`
    } else {
        deg = '°C'
        degToggler.textContent = deg
        temp.textContent = `Temperature: ${currentCityObject.temp_c} °C`
        feelsLikeTemp.textContent = `Feels like: ${currentCityObject.feelslike_c} °C`
    }
})

searchButton.addEventListener('click', () => {
    const city = document.querySelector('#search').value
    
    infoObject = getInfoObject(city)
    infoObject
    .then(setBackground(infoObject))
    .then(result => {
        displayInfo(result, deg)
        currentCityObject = result
        console.log(currentCityObject)
    })
})

input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const city = document.querySelector('#search').value
    
        infoObject = getInfoObject(city)
        infoObject
        .then(setBackground(infoObject))
        .then(result => {
            displayInfo(result, deg)
            currentCityObject = result
            console.log(currentCityObject)
        })
    }
  });
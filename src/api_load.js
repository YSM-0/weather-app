async function loadWeatherJson(location) {
    const city = location
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=1f03ba2cb86d40a5957211626232103&q=${city}&aqi=no`)
        return response.json()
    }
    catch(err) {
        console.log(err)
    }
}

async function getInfoObject(location) {
    const weatherJson = await loadWeatherJson(location)
    const infoObject = {}

    infoObject.name = weatherJson.location.name
    infoObject.country = weatherJson.location.country
    infoObject.temp_f = weatherJson.current.temp_f
    infoObject.temp_c = weatherJson.current.temp_c
    infoObject.feelslike_f = weatherJson.current.feelslike_f
    infoObject.feelslike_c = weatherJson.current.feelslike_c
    infoObject.wind_mph = weatherJson.current.wind_mph
    infoObject.wind_kph = weatherJson.current.wind_kph
    infoObject.humidity = weatherJson.current.humidity
    infoObject.cloud = weatherJson.current.cloud
    infoObject.is_day = weatherJson.current.is_day
    infoObject.condition = weatherJson.current.condition.text
    infoObject.icon = weatherJson.current.condition.icon

    return infoObject
}

function setBackground(infoObject) {
    const body = document.body

    infoObject.then((result) => {
        if (result.is_day == 1) {
            body.style.backgroundImage = "url('assets/day.jpeg')"
        } else {
            body.style.backgroundImage = "url('assets/night.jpeg')"
        }
    })
}

export { getInfoObject, setBackground }
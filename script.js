
function submitted(loc, tok) {
    // let url = `http://api.weatherstack.com/current?access_key=${tok}&query=${loc}`
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=${tok}&contentType=json`

    let weatherData;
    fetch(url)
        .then(data => {
            if (document.getElementById('location').value == " ") {
                alert("Please enter location")
            }
            return data.json()
        }
        )

        .then(json => {
            console.log(json)
            weatherData = json;
            document.getElementById('loca').innerText = weatherData.address
            document.getElementById('lat').innerText = weatherData.latitude
            document.getElementById('long').innerText = weatherData.longitude

            document.getElementById('timezone').innerText = weatherData.timezone
            document.getElementById('windSpeed').innerText = weatherData.days[0].windspeed
            document.getElementById('pressure').innerText = weatherData.days[0].pressure
            document.getElementById('humidity').innerText = weatherData.days[0].humidity

            document.getElementById('wind_dir').innerText = weatherData.days[0].winddir
            document.getElementById('uv_index').innerText = weatherData.days[0].uvindex
            document.getElementById('feelslike').innerText = weatherData.days[0].feelslike

            document.getElementById('condition').innerText = weatherData.days[0].conditions
            document.getElementById('sunrise').innerText = weatherData.days[0].sunrise
            document.getElementById('sunset').innerText = weatherData.days[0].sunset


            document.getElementById('success').innerText = "Scroll Down To see Weather Data"
            document.getElementById('success').style.color = "yellow"
            document.getElementById('success').style.fontSize = "1rem";
        }
        )
        .catch(error => {
            EmptyValues();

            alert("Failed to load Weather info");
            throw (error);
        })


}

async function submit() {
    const locat = document.getElementById('location').value;

    const token = document.getElementById('token').value;
    await checkforerror(locat, token)
}
async function checkforerror(location, key) {

    if (location == "") {
        alert("Please Enter Location")
    }
    else if (key == "") {
        alert("Please Enter Access Key")
    }
    else {
        submitted(location, key);
    }
}
function EmptyValues() {
    document.getElementById('success').innerText = "Unable to get Data"
    document.getElementById('success').style.color = "red"
    document.getElementById('success').style.fontSize = "2rem";
    document.getElementById('loca').innerText = " "
    document.getElementById('lat').innerText = " "
    document.getElementById('long').innerText = " "

    document.getElementById('timezone').innerText = " "
    document.getElementById('windSpeed').innerText = " "
    document.getElementById('pressure').innerText = " "
    document.getElementById('humidity').innerText = " "

    document.getElementById('wind_dir').innerText = " "
    document.getElementById('uv_index').innerText = " "
    document.getElementById('feelslike').innerText = " "
}












// // --------------------------------------------------------------
// let loaction = document.querySelector(".location");
// let lat = document.querySelector(".Lat");
// let long = document.querySelector(".Long");
// let timezone = document.querySelector(".TimeZone");
// let windspeed = document.querySelector(".WindSpeed");
// let pressure = document.querySelector(".Pressure");
// let humidity = document.querySelector(".Humidity");
// let windDirection = document.querySelector(".WindDirection");
// let uv = document.querySelector(".UVIndex");
// let feelslike = document.querySelector(".FeelsLike");

// function login() {

//     let apidata = `http://api.weatherstack.com/current?access_key=${APIkey}&query=${inputLoc}`
//     // let apidata = "http://api.weatherstack.com/current?access_key=8cbec4b7aed04afe583c09d1d3330bf0&query=canada"
//     fetch(apidata)
//         .then((response) => {
//             console.log(response.status);
//             console.log(response.ok)
//             return response.json();
//         })
//         .then((data) => {
//             let loactionname = data['location']['country'];
//             let Lat = data['location']['lat'];
//             let time = data["location"]["timezone_id"];
//             let wind = data["current"]["wind_speed"];
//             let pressurevalue = data["current"]["pressure"];
//             let humidityvalue = data["current"]["humidity"];
//             let windDirectionvalue = data["current"]["wind_dir"]
//             let uvvalue = data["current"]["uv_index"];
//             let feelslikevalue = data["current"]["feelslike"];
//             let longvalue = data["location"]["lon"]
//             loaction.innerHTML = `Location: ${loactionname}`
//             lat.innerHTML = `Lat: ${Lat}`
//             timezone.innerHTML = `TimeZone:${time}`
//             windspeed.innerHTML = `Wind Speed: ${wind}`
//             pressure.innerHTML = `Pressure:${pressurevalue}`
//             humidity.innerHTML = `Humidity:${humidityvalue}`
//             windDirection.innerHTML = `Wind Direction:${windDirectionvalue}`
//             uv.innerHTML = `UV Index:${uvvalue}`
//             feelslike.innerHTML = `Feels Like:${feelslikevalue}`
//             long.innerHTML = `Long:${longvalue}`
//         })
// }

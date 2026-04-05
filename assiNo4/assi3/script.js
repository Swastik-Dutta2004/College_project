async function getWeather() {
    let city = document.getElementById('city').value

    try {
        let res = await fetch(`https://wttr.in/${city}?format=j1`)
        let data = await res.json()

        let temp = data.current_condition[0].temp_C
        let weather = data.current_condition[0].weatherDesc[0].value

        document.getElementById("result").innerText = `Temp :${temp}C, Weather: ${weather}`

    } catch (error) {
        document.getElementById("result").innerText = "Error!"
    }
}
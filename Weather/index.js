async function fetchWeather() {
    try {
        const response = await fetch('http://api.open-meteo.com/v1/forecast?latitude=-1.2833&longitude=36.8167&current=temperature_2m,is_day,precipitation,rain&hourly=temperature_2m,precipitation_probability,precipitation,rain,cloud_cover,visibility,wind_speed_120m,wind_direction_120m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto&past_days=1');

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        let current = data.daily;
        let display = document.getElementById("weather");

        //document.getElementById('currentWeather').innerText = current;
        display.innerText = current;
        // console.log(data.daily);
    }

    catch (error) {
        console.error(error);
    }
}
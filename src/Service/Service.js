

export const getWeatherData = async (city) => {
    const apiKey = '91e8858a4028cb92b4c2ab16ffec71cb';
    let url;
    if (!city || city.trim() === '') {
        return { erroMessage: "Please Enter City Name" };
    }


    if (!isNaN(city)) {
        url = `https://api.openweathermap.org/data/2.5/weather?zip=${city},in&appid=${apiKey}`;
    } else {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    }


    try {
        const response = await fetch(url);
        if (response.status === 404) {
            return { erroMessage: "City Not Found" }
        } else {
            const data = await response.json();
            return data;
        }

    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        return null;
    }
}



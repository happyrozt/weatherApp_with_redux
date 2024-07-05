// export const getWeatherData = async (location) => {
//   if (!location || location.trim() === '') {
//     return null;
//   }

//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
//     xhr.addEventListener('readystatechange', function () {
//       if (this.readyState === this.DONE) {
//         if (this.status >= 200 && this.status < 300) {
//           try {
//             resolve(JSON.parse(this.responseText));
//           } catch (error) {
//             resolve(null); 
//           }
//         } else {
//           resolve(null); 
//         }
//       }
//     });

//     xhr.open('GET', `https://yahoo-weather5.p.rapidapi.com/weather?location=${location}&format=json&u=f`);
//     xhr.setRequestHeader('x-rapidapi-key', '907a059af7msh8bb50b6ac524b12p1e3bd7jsne396e4afe335');
//     xhr.setRequestHeader('x-rapidapi-host', 'yahoo-weather5.p.rapidapi.com');

//     xhr.send(null);
//   });
// };



export const getWeatherData = async (city) => {
    if (!city || city.trim() === '') {
            return {erroMessage:"Please Enter City Name"};
          }
    const apiKey = '91e8858a4028cb92b4c2ab16ffec71cb'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (response.status === 404) {
            return {erroMessage:"City Not Found"}
        } else {
            const data = await response.json();
            return data;
        }

    } catch (error) {
        console.error('Failed to fetch weather data:', error);
        return null;
    }
}



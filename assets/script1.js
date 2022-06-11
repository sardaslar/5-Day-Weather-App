let weather = {
    "apiKey": "d187abc0796e870cbe06b1a81a9598d9",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));

        
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather [0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather In " + name; 
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        console.log(temp, humidity, speed)
        document.querySelector(".temp").innerText = temp + " °C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + " %";
        document.querySelector(".wind").innerText = "Wind Speed" + speed ;


    },
    search: function () {
    console.log(document.querySelector(".search-bar").value)
     this.fetchWeather(document.querySelector(".search-bar").value)
    }
};

document.querySelector(".search-button").addEventListener("click",function(){
    weather.search();
})
    
// for press enter but not functioal 

document.quarySelector('.search-bar').addEventListener('keypress' ,function (e){
if(e.key === 'Enter')
    weather.search();
}
);
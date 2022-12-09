document
  .getElementById("weatherSubmit")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("weatherInput").value;
    if (value === "") return;
    console.log(value);

    const url3 =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      value +
      ",US&units=imperial" +
      "&APPID=0156f6b3c1ae277415b156820a984408";
    fetch(url3)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let hour = "";
        for (let i = 0; i < json.list.length; i++) {
          hour +=
            "<p class=forcast-p>Temperature: " +
            json.list[i].main.temp +
            "</p>";
        }

        document.getElementById("HourResults").innerHTML = hour;
      });

    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=" +
      value +
      ",US&units=imperial" +
      "&APPID=0156f6b3c1ae277415b156820a984408";
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let results = "";

        results += "<h2>Weather in " + json.name + "</h2>";
        for (let i = 0; i < json.weather.length; i++) {
          results +=
            '<img src="http://openweathermap.org/img/w/' +
            json.weather[i].icon +
            '.png"/>';
        }
        results += "<h2>" + json.main.temp + " &deg;F</h2>";
        results += "<p>";
        for (let i = 0; i < json.weather.length; i++) {
          results += json.weather[i].description;
          if (i !== json.weather.length - 1) results += ", ";
        }
        results += "</p>";
        document.getElementById("weatherResults").innerHTML = results;
      });

    const url2 =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
      value +
      ", US&units=imperial" +
      "&APPID=0156f6b3c1ae277415b156820a984408";
    fetch(url2)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        let forecast = "";
        for (let i = 0; i < json.list.length; i++) {
          forecast +=
            "<div class=test> <h2 class=forcast-header>" +
            moment(json.list[i].dt_txt).format("MMMM Do YYYY, h:mm:ss a") +
            "</h2>";
          forecast +=
            "<p class=forcast-p>Temperature: " +
            json.list[i].main.temp +
            "</p>";
          forecast +=
            '<img class=forcast-img src="https://openweathermap.org/img/w/' +
            json.list[i].weather[0].icon +
            '.png"/> </div>';
        }
        document.getElementById("forecastResults").innerHTML = forecast;
      });
  });

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
  $('#weatherLocation').click(function () {
    const city = $('#city').val();
    const state = $('#state').val();
    $('#city').val('');
    $('#state').val('');

    let request = new XMLHttpRequest();
    const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${state}&appid=${process.env.API_KEY}&units=imperial`;
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open('GET', url1, true);
    request.send();

    let request3 = new XMLHttpRequest();
    const url3 = `https://api.openweathermap.org/data/2.5/forecast/?q=${city},${state}&appid=${process.env.API_KEY}`;
    request3.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response3 = JSON.parse(this.responseText);
        console.log(response3);
        getForecast(response3);
      }
    };
    request3.open('GET', url3, true);
    request3.send();

    function getElements(response) {
      $('.showHumidity').text(
        `The humidity in ${city} is ${response.main.humidity}%`
      );
      $('.showTemp').text(
        `The temperature in Fahrenheit is ${response.main.temp} degrees.`
      );
      $('.showClouds').text(
        `the cloudiness in ${city} is  ${response.clouds.all}%`
      );
    }
    function getForecast(response3) {
      // const url3 = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}, ${state}&appid=${process.env.API_KEY}&units=imperial`;
      $('.showForecast').text(
        `The 8 day forecast in ${city} is ${response3.list[0].main.temp}`
      );
    }
  });

  $('#weatherZip').click(function () {
    $('#weatherZip').click(function () {
      const zipCode = $('#zipCode').val();
      $('#zipCode').val('');

      let request = new XMLHttpRequest();
      const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&appid=${process.env.API_KEY}&units=imperial`;

      request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      };

      request.open('GET', url2, true);
      request.send();

      function getElements(response) {
        $('.showHumidity').text(
          `The humidity in ${zipCode} is ${response.main.humidity}%`
        );
        $('.showTemp').text(
          `The temperature in Fahrenheit is ${response.main.temp} degrees.`
        );
        $('.showClouds').text(
          `the cloudiness in ${zipCode} is  ${response.clouds.all}%`
        );
      }
    });
  });
});

// $('.showTemp').text(
//   `The temperature in Fahrenheit is ${response.main.temp} degrees.`
// );

// else if (this.readyState)

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

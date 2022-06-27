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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${state}&appid=${process.env.API_KEY}&units=imperial`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open('GET', url, true);
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
});

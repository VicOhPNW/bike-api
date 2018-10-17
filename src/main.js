import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { StolenBikeList } from './bike-api.js';

$(document).ready(function() {
  let stolenBike = new StolenBikeList();  // create instance of WeatherService class
  let promise = stolenBike.getStolenBikes();  // call the instance method and pass in user input

  promise.then(function(response) {
    let body = JSON.parse(response);
    $('#stolen-list').append(`${body.bikes[0].title}`);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
});

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { StolenBikeList } from './bike-api.js';

$(document).ready(function() {
  let stolenBike = new StolenBikeList();
  let promise = stolenBike.getStolenBikes();

  promise.then(function(response) {
    let body = JSON.parse(response);

      for(var i=0; i < body.bikes.length; i++) {
        let title = body.bikes[i].title;
        $(".list").append("<li>" + title +"</li>");
      }
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
});

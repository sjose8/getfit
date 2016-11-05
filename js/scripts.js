// backend
function Weather() {
}

Weather.prototype.getWeather = function(zipcode) {
  $.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=4114b39093003af2a4520831ad994aa7').then(function(response) {
    $('#weather').text("You'll see " + response.weather[0].description + " in " + response.name + " today.");
    $('#outfit').text("blah");
  });
};

// front end
$(document).ready(function() {
  var currentWeatherObject = new Weather();

  $('#location').submit(function(event){
    event.preventDefault();
    var zipcode = parseInt($('#zipcode').val());
    currentWeatherObject.getWeather(zipcode);

  });
});

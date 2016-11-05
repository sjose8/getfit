// backend
function Weather() {
}

Weather.prototype.getWeather = function(zipcode) {
  $.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&appid=4114b39093003af2a4520831ad994aa7')
  .then(function(response) {
    $('#weather').text("You'll see " + response.weather[0].description + " in " + response.name + " today.");
    if (response.weather[0].description === "clear sky") {
      $('#first-title').text("Running");
      $('#first-body').text("Run like the wind! It's a beautiful day.");
      $('#second-title').text("Bike");
      $('#second-body').text("Pedal to the metal!");
      $('#third-title').text("Tennis");
      $('#third-body').text("Meet up with a friend at your local court!");
    } else {
      $('#first-title').text("Dancing");
      $('#first-body').text("Dance like no one is watching! Or try a local dance class.");
      $('#second-title').text("Yoga");
      $('#second-body').text("Oooommmm");
      
      $('#third-title').text("Swimming");
      $('#third-body').text("Laps at your local gym. Try for 500 meters!");
    }
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

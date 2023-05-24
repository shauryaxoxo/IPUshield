document.addEventListener("DOMContentLoaded", function() {
    var panicButton = document.getElementById("panic-button");
  
    panicButton.addEventListener("click", function() {
      // Check if geolocation is supported by the browser
      if ("geolocation" in navigator) {
        // Get the current position
        navigator.geolocation.getCurrentPosition(function(position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;
  
          // Send the emergency message with the location
          sendEmergencyMessage(latitude, longitude);
        }, function(error) {
          console.log("Error getting location:", error);
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    });
  
    function sendEmergencyMessage(latitude, longitude) {
      // Create an AJAX request to the server
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/emergency", true);
      xhr.setRequestHeader("Content-Type", "application/json");
  
      // Prepare the data to send
      var data = {
        latitude: latitude,
        longitude: longitude
      };
  
      // Convert the data to JSON
      var jsonData = JSON.stringify(data);
  
      // Send the request
      xhr.send(jsonData);
    }
  });
  
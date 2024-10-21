console.log("Loacation file loaded");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    //   x.innerHTML = "Geolocation is not supported by this browser.";
    console.log("Geolocation is not supported by this browser");
  }
}

function showPosition(position) {
  console.log(position)
  console.log(position.coords.latitude, position.coords.longitude);
}

getLocation();
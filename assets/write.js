var lat = document.getElementById('lat');
var lon = document.getElementById('lon');
console.log(lat, lon);
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((pos) => {
        lat.value = pos.coords.latitude;
        lon.value = pos.coords.longitude;
    });
}


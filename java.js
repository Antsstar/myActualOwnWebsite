var button = document.getElementById('buttton1');
console.log(button);
button1.addEventListener("click",function(){
  alert("Kon'nichiwa");
});

var Box = document.getElementById("box");

var myFunction = document.getElementById('myfunction');
myfunction.addEventListener("click",function(Box){
  box.classList.toggle("change");
});

function openPicture(x){
  var i;
  var z = document.getElementsByClassName('pictures')
  for (i = 0; i < z.length; i++) {
    z[i].style.display = "none";
  }
  document.getElementById(x).style.display= "block";
}

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 36.204824, lng: 138.252924},
    zoom: 6
  });

  var marker01 = new google.maps.Marker({
  position: {lat: 35.619225, lng: 139.776762},
  map: map,
  title: 'name',
  draggable: false,
  label: "1"
  });

  var marker02 = new google.maps.Marker({
  position: {lat: 34.216667, lng: 135.583333},
  map: map,
  title: 'name',
  draggable: false,
  label: "2"
  });

  var marker03 = new google.maps.Marker({
  position: {lat: 24.340661, lng: 124.155580},
  map: map,
  title: 'name',
  draggable: false,
  label: "3"
  });

  var marker04 = new google.maps.Marker({
  position: {lat: 34.385203, lng: 132.455293},
  map: map,
  title: 'name',
  draggable: false,
  label: "4"
  });

  var marker05 = new google.maps.Marker({
  position: {lat: 35.011636, lng: 135.768029},
  map: map,
  title: 'name',
  draggable: false,
  label: "5"
  });

  var marker06 = new google.maps.Marker({
  position: {lat: 34.693738, lng: 135.502165},
  map: map,
  title: 'name',
  draggable: false,
  label: "6"
  });

  var marker07 = new google.maps.Marker({
  position: {lat: 35.180188, lng: 136.906565},
  map: map,
  title: 'name',
  draggable: false,
  label: "7"
  });

  var marker08 = new google.maps.Marker({
  position: {lat: 26.501301, lng: 127.945404},
  map: map,
  title: 'name',
  draggable: false,
  label: "8"
  });

  var marker09 = new google.maps.Marker({
  position: {lat: 34.691269, lng: 135.183071},
  map: map,
  title: 'name',
  draggable: false,
  label: "9"
  });

  var marker10 = new google.maps.Marker({
  position: {lat: 35.689487, lng: 139.691706},
  map: map,
  title: 'name',
  draggable: false,
  label: "10"
  });
 }

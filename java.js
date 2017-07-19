var button = document.getElementById('buttton1');
console.log(button);
button1.addEventListener("click",function(){
  alert('Hello');
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

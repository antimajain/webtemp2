
 function load(){
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function(){
          if (this.readyState == 4 && this.status == 200) {
              var data = JSON.parse(this.response);
              document.getElementById("img1").src = data[0].img;
              document.getElementById("img2").src = data[1].img;
              document.getElementById("img3").src = data[2].img;
              document.getElementById("img4").src = data[3].img;
              document.getElementById("img5").src = data[4].img;
              document.getElementById("img6").src = data[5].img;




          }
      };
      xmlhttp.open("GET", "https://raw.githubusercontent.com/antimajain/webtemp2/master/an/json1.json", true);
      xmlhttp.send();


 }
 var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
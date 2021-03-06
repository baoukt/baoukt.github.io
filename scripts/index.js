function scroll_events(){
  var element = document.getElementById("events-container");
  element.scrollIntoView({block: 'center', behavior:'smooth'});
}

function scroll_about(){
  var element = document.getElementById("about-container");
  element.scrollIntoView({block: 'center',behavior:'smooth'});
}

function hide(){
  var x = document.getElementById("urgent-banner");
  x.style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// var slideIndex = 0;
// showSlides();
//
// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 3500); // Change image every 2 seconds
// }

function filterEvents(item, index) {
  console.log(index);

  let eventDate = Date.parse(item.date);
  let today = Date.now();

  if (eventDate > today && index < 3) {
    document.getElementById("events").innerHTML += "<div class='tile tile-"
        + (index + 1) + "'><text class='event-text'>" + item.name + "</text></div>";
  }

}

// $(document).ready(function () {
//   $(".x-image").click(function () {
//     $(".urgent-banner").hide();
//   });
//
//   // Reading in values from the external JSON file with the D3 library
//   d3.json("events.json", function (data) {
//     let eventLength = data.events.length;
//     data.events.forEach(filterEvents);
//
//     console.log(data);
//     console.log(eventLength);
//   });
//
// });
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$( document ).ready(function() {
  $( ".x-image" ).click(function() {
    $( ".urgent-banner" ).hide();
  });

  $("button.events-button").click(function() {
    $('html,body').animate({
      scrollTop: $(".events-container").offset().top},
      'slow');
  });

  $("button.aboutus").click(function() {
    $('html,body').animate({
      scrollTop: $(".about-container").offset().top},
      'slow');
  });

});

//events
var count = 0;
var json = {
	"events":[
   {"date":'20 Jan 2020 00:00:00 EST', "name":"mlk day", "desc":"happy mlk day 2020"},
   {"date":'20 Jan 2021 00:00:00 EST', "name":"mlk day 2021", "desc":"happy mlk day"},
    {"date":'14 Feb 2021 00:00:00 EST', "name":"valentines", "desc":"happy valentines"},
    {"date": '24 Apr 2021 00:00:00 EST', "name":"nyc", "desc":"spring conference 2021"}
  ]
}

function filter (item, index) { 
	var countid = "event"+(count+1);
	var eventdate = Date.parse(item.date);
  var today = Date.now();
  if(eventdate > today && count<3){
  	document.getElementById(countid).innerHTML += 
      '<text class="event-title">' + item.name + '</text>' +
      '<text class="event-text">' + item.desc + '</text>'+
      '<text class="event-text">' + eventdate.getDay() + '</text>';
      //wait it says .getDay() is not a function?? same for getMonth and getYear.
    count++; 
  }
}

json.events.forEach(filter);
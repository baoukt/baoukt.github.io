$(document).ready(function () {
  $("img.event-1-img").on("click", function (event) {
    $("div.pa-gallery-player-widget").show();
    $("img.close").show();
  });

  $("img.close").on("click", function () {
    $("div.pa-gallery-player-widget").hide();
    $("img.close").hide();
  });
});

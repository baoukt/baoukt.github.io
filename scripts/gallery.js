$(document).ready(function () {
  $("img.thumb-img").on("click", function (event) {
    $("div.overlay-wrapper").show();
    var src = event.target.src;
    var newsrc= src.replace("thumb","full")
    $("img.full").attr("src", newsrc);
  });

  $("img.close").on("click", function () {
    $("div.overlay-wrapper").hide();
  });
});

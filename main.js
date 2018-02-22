function slideSwitch() {
  var activeSlide=$("#image-container img.active");
  var nextSlide=activeSlide.next();
  nextSlide.addClass("active");
  activeSlide.removeClass("active");
}

$(function() {
  setInterval("slideSwitch()", 3000)
})



//$(document).ready(function() {
//  $(".left").click(function() {
//    $("main img").eq(0).toggleClass('img-moved-top')
//  })
//})

//setInterval(function() {
//    $("main img").eq(0).toggleClass('img-moved-top')
//    }, 2000)

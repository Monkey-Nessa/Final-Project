$(document).ready(function() {
  $(".left").click(function() {
    $("main img").eq(0).toggleClass('img-moved-left')
  })
})

setInterval(function() {
    $("main img").eq(0).toggleClass('img-moved-left')
    }, 2000)

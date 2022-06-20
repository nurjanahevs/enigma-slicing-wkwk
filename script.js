$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".navbar").css("background", "#3366ff");
    } else {
      $(".navbar").css("background", "transparent");
    }
  });
});

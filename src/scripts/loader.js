var width = 100;

var perfData = window.performance.timing;

var EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);

var time = parseInt(EstimatedTime / 1000 % 60) * 100;

$(".loader > .progress-bar").animate({
  width: width + "%" },
time);

// Percentage Increment Animation
var PercentageID = $(".loader > .progress-bar"),
start = 0,
end = 100,
durataion = time;
animateValue(PercentageID, start, end, durataion);

function animateValue(id, start, end, duration) {

  var range = end - start,
  current = start,
  increment = end > start ? 1 : -1,
  stepTime = Math.abs(Math.floor(duration / range)),
  obj = $(id);

  var timer = setInterval(function () {
    current += increment;
    $(obj).text(current + "%");    
    $(obj).attr('aria-valuenow', current);
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

setTimeout(function () {
  $('.progress.loader').fadeOut(300);
  $('.container-fluid').removeClass('d-none');
}, time);
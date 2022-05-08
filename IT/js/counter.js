var body = document.body;

function count(countBegin, countEnd, element, time) {
  var inc = 1;
  var timer = setInterval(function() {
    if (countBegin >= countEnd) {
      element.innerHTML = countEnd;
      clearInterval(timer);
    } else {
      if (countBegin % 10 <= 5 || countBegin % 100 <= 5) {
        inc += 1;
      }
      countBegin += inc;
      element.innerHTML = countBegin;
    }
  }, time);
}

function checker() {
  var height = body.scrollHeight;
  var ratio;

  if (height > 4000) {
    ratio = 0.75;
  } else if (height > 3500) {
    ratio = 0.8;
  } else if (height > 2100) {
    ratio = 0.65;
  }
  if (window.scrollY > height * ratio) {
    console.log("Start at: ", window.scrollY);
    count(0, 5000, document.querySelector("#A"), 10);
    count(0, 300, document.querySelector("#B"), 50);
    count(0, 1200, document.querySelector("#C"), 30);
    count(0, 6000, document.querySelector("#D"), 10);
    window.removeEventListener("scroll", checker);
  }
}
window.addEventListener("scroll", checker);
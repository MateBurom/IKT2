document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.querySelectorAll('.box');

  function checkPosition() {
    for (var i = 0; i < boxes.length; i++) {
      var box = boxes[i];
      var positionFromTop = box.getBoundingClientRect().top;

      if (positionFromTop - window.innerHeight <= 0) {
        box.classList.add('show');
      } else {
        box.classList.remove('show');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  checkPosition();
});
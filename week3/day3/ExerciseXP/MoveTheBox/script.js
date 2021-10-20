function myMove() {
    var timer = setInterval(function () {

      let animateBox = document.querySelector("#animate");
  
      if (animateBox.offsetTop < 340) {
        animateBox.style.top = animateBox.offsetTop + 8 + "px";
        animateBox.style.left = animateBox.offsetTop + 8 + "px";
      } else {
        clearInterval(timer);
      }
    }, 10);
  }
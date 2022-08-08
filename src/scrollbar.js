let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  scrollFunction();

  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollPos = currentScrollPos;
};

// Get the button

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  const myButton = document.getElementById("btn-back-to-top");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
    myButton.addEventListener("click", backToTop);
  } else {
    myButton.style.display = "none";
    myButton.addEventListener("click", backToTop);
  }
}

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const Slideshow = document.getElementById("Slideshow")

function setImageWidth() {
  Slideshow.setAttribute("width", window.innerWidth)
  Slideshow.setAttribute("height", window.innerHeight - 40)
}

//setInterval(setImageWidth, 1)

const MenuButton = document.getElementById("menuNav");
const Sidebar = document.getElementById("sidebar");

var SidebarOpen = false;

function OpenSidebar() {
    gsap.to("#sidebar", {duration: 1, x: 100});
}; 

function CloseSidebar() {
    gsap.to("#sidebar", {duration: 1, x: -100});
};

function ToggleSidebar() {
    if (SidebarOpen == true) {
        SidebarOpen = false;
    } else {
        SidebarOpen = true
    }

    if (SidebarOpen == true) {
        OpenSidebar();
    } else {
        CloseSidebar()
    }
};

MenuButton.addEventListener("click", ToggleSidebar)

// Slideshow code, moved from the index.html file

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}
    function myFunction(x) {
  x.classList.toggle("change");
}

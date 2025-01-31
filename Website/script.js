// JavaScript to toggle the side menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.toggle("open"); // Toggles the 'open' class to slide the menu in/out
  });
  
  // JavaScript to close the menu when the close button is clicked
  document.getElementById("close-btn").addEventListener("click", function () {
    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.remove("open"); // Remove the 'open' class to slide the menu out
  });
  
  // Close the menu if the user clicks outside of the menu
  document.addEventListener("click", function (event) {
    const sideMenu = document.getElementById("side-menu");
    const menuToggle = document.getElementById("menu-toggle");
  
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      sideMenu.classList.remove("open"); // Close the menu if clicking outside
    }
  });
  
  let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('#slider .slide');
  const totalSlides = slides.length;
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;

  const slider = document.getElementById('slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}



// function to send email
function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Construct the email body and subject
  const subject = `Message from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;


  // Hard-code the recipient email address
  const recipient = 'group@gmail.com';
  
  // Create the mailto link
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

  // Trigger the mailto link
  window.location.href = mailtoLink;
  }
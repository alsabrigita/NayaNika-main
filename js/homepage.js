document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle active class on navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
      });
    });
  
    // Function to handle click event on "Shop Now" button
    const shopNowButton = document.querySelector(".herobutton button");
    shopNowButton.addEventListener("click", function() {
      window.location.href = "shop.html";
    });
  
    // Function to handle click event on "View All" buttons
    const viewAllButtons = document.querySelectorAll(".viewallbutton button");
    viewAllButtons.forEach(button => {
      button.addEventListener("click", function() {
        window.location.href = "shop.html";
      });
    });
  });
  
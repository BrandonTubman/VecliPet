document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
  
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !isExpanded);
      menu.classList.toggle("show");
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");
  
    menuButton?.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", !isExpanded);
      menu?.classList.toggle("show");
    });
  
    document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault();
  
      const errorElements = document.querySelectorAll(".error-message");
      errorElements.forEach((el) => (el.style.display = "none"));
  
      const name = document.getElementById("name").value.trim();
      const petName = document.getElementById("petName").value.trim();
      const petType = document.getElementById("petType").value;
      const serviceRequested = document.getElementById("serviceRequested").value;
      const appointmentTime = document.getElementById("appointmentTime").value;
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
  
      let isValid = true;
  
      if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        document.getElementById("nameError").style.display = "block";
        isValid = false;
      }
  
      if (petName === "") {
        document.getElementById("petNameError").textContent = "Pet name is required";
        document.getElementById("petNameError").style.display = "block";
        isValid = false;
      }
  
      if (!petType) {
        document.getElementById("petTypeError").textContent = "Pet type is required";
        document.getElementById("petTypeError").style.display = "block";
        isValid = false;
      }
  
      if (!serviceRequested) {
        document.getElementById("serviceRequestedError").textContent =
          "Service requested is required";
        document.getElementById("serviceRequestedError").style.display = "block";
        isValid = false;
      }
  
      if (appointmentTime === "") {
        document.getElementById("appointmentTimeError").textContent =
          "Preferred appointment time is required";
        document.getElementById("appointmentTimeError").style.display = "block";
        isValid = false;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Valid email is required";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
      }
  
      const phonePattern = /^[0-9]{10}$/;
      if (phone === "" || !phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Valid phone number is required";
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
      }
  
      if (isValid) {
        alert("Form submitted successfully!");
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    sendFormData(formData);
  });

  document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    sendFormData(formData);
  });

  function sendFormData(formData) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/xqazjjbz"); // Replace with the correct Formspree endpoint
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert("Form successfully submitted!");
        } else {
          alert("There was a problem submitting the form.");
        }
      }
    };
    xhr.send(formData);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Handle "Contact Us" form submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    sendFormData(formData);
  });

  // Handle "Newsletter Signup" form submission
  document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    sendFormData(formData);
  });

  // Show/hide the "Other Occupation" field based on selection
  document.getElementById("occupation").addEventListener("change", function() {
    const otherField = document.getElementById("other-occupation-field");
    if (this.value === "other") {
      otherField.style.display = "block";
    } else {
      otherField.style.display = "none";
    }
  });
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

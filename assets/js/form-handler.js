document.addEventListener("DOMContentLoaded", () => {
  for (const id of ["contact-form", "newsletter-form"]) {
    const form = document.getElementById(id);
    if (!form) continue;

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      const button = form.querySelector('button[type="submit"]');
      button.disabled = true;
      status.textContent = "Sending…";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        status.textContent = "Thanks — your message has been sent.";
      } catch (_) {
        status.textContent = "Sorry, the form could not be sent. Please try again or email me directly.";
      } finally {
        button.disabled = false;
      }
    });
  }
});

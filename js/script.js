 // Handle contact form submission
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const statusMessage = document.getElementById("statusMessage")
      const submitButton = document.getElementById("submitButton")

      // Disable submit button
      submitButton.disabled = true
      submitButton.textContent = "Sending..."

      // Simulate form submission (replace with actual backend call)
      setTimeout(() => {
        statusMessage.textContent = "Thank you for your message! We'll get back to you soon."
        statusMessage.classList.add("text-success")

        // Reset form
        contactForm.reset()
        submitButton.disabled = false
        submitButton.textContent = "Submit"

        // Clear message after 5 seconds
        setTimeout(() => {
          statusMessage.textContent = ""
        }, 5000)
      }, 1000)
    })
  }

  // Form validation
  const forms = document.querySelectorAll("form")
  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add("was-validated")
    })
  });

  document.querySelectorAll('[data-bs-image]').forEach(el => {
  el.addEventListener('click', () => {
    const src = el.getAttribute('data-bs-image');
    const img = document.getElementById('lightboxImage');
    if (img) img.src = src;
  });
});

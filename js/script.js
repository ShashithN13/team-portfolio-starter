// MEMBER 3: all JavaScript interactivity
const words = ["code","creativity","innovation","solutions"];
const typingElement = document.getElementById("write-typing-effect");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if(!isDeleting){
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if(charIndex === currentWord.length){
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if(charIndex === 0){
      isDeleting = false;
      wordIndex++;
        if(wordIndex === words.length){
          wordIndex = 0;
        }
    }
  }
    setTimeout(typeEffect, isDeleting ? 100 : 200);
}

typeEffect();

const pageSections = Array.from(document.querySelectorAll("main > section[id]"));

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

    const contactForm = document.querySelector(".contact form");

    if (contactForm) {
      const requiredFields = Array.from(contactForm.querySelectorAll("[required]"));
      contactForm.noValidate = true;

      function validateField(field) {
        const label = field.labels[0]?.textContent.trim() || "This field";

        if (!field.value.trim()) {
          field.setCustomValidity(`${label} is required.`);
        } else if (field.type === "email" && field.validity.typeMismatch) {
          field.setCustomValidity("Please enter a valid email address.");
        } else {
          field.setCustomValidity("");
        }
      }

      requiredFields.forEach((field) => {
        field.addEventListener("input", () => validateField(field));
      });

      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        requiredFields.forEach(validateField);

        if (!contactForm.reportValidity()) {
          return;
        }

        const submittedName = contactForm.elements.name.value.trim();
        const successMessage = contactForm.querySelector("#form-message");

        if (successMessage) {
          successMessage.textContent = `Thanks, ${submittedName}! Your message was sent.`;
        }

        contactForm.reset();
      });
    }
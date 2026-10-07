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

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});
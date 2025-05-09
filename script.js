const messages = [
    "Hello! I'm BMO!",
    "I can play games and show websites!",
    "Press → to continue.",
    "Built with HTML, CSS & ❤️.",
    "Adventure awaits!"
  ];
  
  let currentIndex = 0;
  let faceShown = true;
  let justReset = false;
  
  const screenText = document.getElementById("screenText");
  const bmoFace = document.getElementById("bmoFace");
  const screen = document.getElementById("screen");
  
  function showMessages() {
    if (faceShown) {
      bmoFace.style.display = "none"; // Hide face
      screen.classList.add("screenWithText"); // Add background color for text
      screenText.style.display = "block"; // Show text
      faceShown = false;
    }
  }
  
  function updateScreen() {
    screenText.textContent = messages[currentIndex]; // Update text based on the current index
    screenText.style.display = "block"; // Ensure text is shown
  }
  
  function nextText() {
    if (faceShown) {
      showMessages(); // Show messages after the face
      updateScreen(); // Show first message
    } else {
      currentIndex = (currentIndex + 1) % messages.length; // Cycle through messages
      updateScreen(); // Update with next message
    }
  }
  
  function prevText() {
    if (faceShown) {
      showMessages(); // Show messages after the face
      updateScreen(); // Show first message
    } else {
      currentIndex = (currentIndex - 1 + messages.length) % messages.length; // Cycle backward
      updateScreen(); // Update with previous message
    }
  }
  
  function resetBMO() {
    currentIndex = 0; // Reset to the first message
    faceShown = true; // Show face initially
    bmoFace.style.display = "block"; // Ensure the face is visible
    screenText.style.display = "none"; // Hide text initially
    screen.classList.remove("screenWithText"); // Reset background to black
  }
  
  function startBMO() {
    resetBMO(); // Reset BMO to the initial state
  }
  
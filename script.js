const announcement = document.getElementById("announcement");
const draftOrder = document.getElementById("draft-order");
const revealButton = document.getElementById("reveal-button");

// Array of team names
const teams = [
  "Kollerschlager Packers (mathias)",
  "Kollerschlag Kuahbuam (Pepone)",
  "Edle Pferde aus Fuchsoedt (Franz)",
  "Blue Warriors Kollerschlag (Stefan)",
  "Krieger Besieger Kollerschlag (Patrick)",
  "Marktplatz-49ers (Benji)",
  "Urfahr Raiders (Pez)",
  "Birkenfeld69ers (Jonas Martin)",
  "Rodltal Pirates (Philipp)",
  "LV Raidern (Sebastian)",
  "Vienna 49ers (Otmar)",
  "New Kollerschlag Patriots (Martin)"
];

// Function to create a firework animation
function createFireworkAnimation() {
  const fireworksContainer = document.getElementById("fireworks-container");
  const numFireworks = 20; // Adjust the number of fireworks as desired

  for (let i = 0; i < numFireworks; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 80}%`;
    fireworksContainer.appendChild(firework);
  }
}

// Function to reveal the draft order entries with intervals
function revealDraftOrderEntries() {
  for (let i = 0; i < teams.length; i++) {
    setTimeout(() => {
      const listItem = document.createElement("li");
      listItem.textContent = `Pick ${i + 1}: ${teams[i]}`;
      draftOrder.appendChild(listItem);
    }, i * 2000); // Adjust the interval as needed
  }
}

// Function to reveal the draft order when the button is clicked
revealButton.addEventListener("click", () => {
  // Create the firework animation
  createFireworkAnimation();

  // Reveal the draft order list and hide the button
  draftOrder.style.display = "block";
  revealButton.style.display = "none";

  // Reveal the draft order entries with intervals
  revealDraftOrderEntries();
});
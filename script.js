const announcement = document.getElementById("announcement");
const draftOrder = document.getElementById("draft-order");
const revealButton = document.getElementById("reveal-button");

// Array of team names
const teams = [
"Urfahr Raiders (Pez)",
"LV Raidern (Sebastian)",
"Blue Warriors Kollerschlag (Stefan)",
"New Kollerschlag Patriots (Martin)",
"LongDong9ers (Julian)",
"Marktplatz-49ers (Benji)",
"Edle Pferde aus Fuchsoedt (Franz)",
"Kollerschlager Packers (mathias)",
"Vienna 49ers (Otmar)",
"Birkenfeld69ers (Jonas Martin)",
"Rodltal Pirates (Philipp)",
"Tuschetseudter chiefs (Martin)"
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
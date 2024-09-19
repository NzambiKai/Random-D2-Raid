const raidActivities = [
  {
    imagePath: "salvations-edge.jpg",
    activity: "Salvation's Edge",
    location: "Pale Heart",
    requiresImagePath: "the-final-shape.png",
    requires: "The Final Shape"
  },
  {
    imagePath: "crotas-end.jpg",
    activity: "Crota's End",
    location: "Legends",
    requiresImagePath: "destiny-2.png",
    requires: "Free-to-Play"
  },
  {
    imagePath: "root-of-nightmares.jpg",
    activity: "Root of Nightmares",
    location: "Neomuna",
    requiresImagePath: "lightfall.png",
    requires: "Lightfall"
  },
  {
    imagePath: "kings-fall.jpg",
    activity: "King's Fall",
    location: "Legends",
    requiresImagePath: "destiny-2.png",
    requires: "Free-to-Play"
  },
  {
    imagePath: "vow-of-the-disciple.jpg",
    activity: "Vow of the Disciple",
    location: "Throne World",
    requiresImagePath: "the-witch-queen.png",
    requires: "Witch Queen"
  },
  {
    imagePath: "vault-of-glass.jpg",
    activity: "Vault of Glass",
    location: "Legends",
    requiresImagePath: "destiny-2.png",
    requires: "Free-to-Play"
  },
  {
    imagePath: "deep-stone-crypt.jpg",
    activity: "Deep Stone Crypt",
    location: "Europa",
    requiresImagePath: "beyond-light.png",
    requires: "Beyond Light"
  },
  {
    imagePath: "garden-of-salvation.jpg",
    activity: "Garden of Salvation",
    location: "Moon",
    requiresImagePath: "shadowkeep.png",
    requires: "Shadowkeep Pack"
  },
  {
    imagePath: "last-wish.jpg",
    activity: "Last Wish",
    location: "Dreaming City",
    requiresImagePath: "forsaken.png",
    requires: "Forsaken Pack"
  }
];

const classes = ["Hunter", "Titan", "Warlock"];
const subclasses = ["Solar", "Arc", "Void", "Stasis", "Strand", "Prismatic"];

const generateBtn = document.getElementById('generate-btn');
const raidDetails = document.getElementById('raid-details');
const raidImage = document.getElementById('raid-image');
const raidName = document.getElementById('raid-name');
const raidLocation = document.getElementById('raid-location');
const raidRequires = document.getElementById('raid-requires');
const extraChallenge = document.getElementById('extra-challenge');

generateBtn.addEventListener('click', () => {
    const randomRaid = raidActivities[Math.floor(Math.random() * raidActivities.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomSubclass = subclasses[Math.floor(Math.random() * subclasses.length)];
    raidImage.src = `images/raids/${randomRaid.imagePath}`;
    raidName.textContent = randomRaid.activity;
    raidLocation.innerHTML = `<h4>Location</h4><p>${randomRaid.location}</p>`;
    raidRequires.innerHTML = `<h4>Requires</h4><img id="requires-image" src="images/icons/${randomRaid.requiresImagePath}" alt="Requires Image"><p>${randomRaid.requires}</p>`;
    extraChallenge.innerHTML = `<h4>Extra Challenge</h4><p>Run all ${randomClass} and only ${randomSubclass} subclass.</p>`;
    raidDetails.style.display = 'block';
});

// Hide raid activity initially
//raidDetails.style.display = 'none';

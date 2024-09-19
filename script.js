const raidActivities = [
  {
    imagePath: "salvations-edge.jpg",
    activity: "Salvation's Edge",
    location: "Pale Heart",
    requires: "The Final Shape"
  },
  {
    imagePath: "crotas-end.jpg",
    activity: "Crota's End",
    location: "Legends",
    requires: "Free-to-Play"
  },
  {
    imagePath: "root-of-nightmares.jpg",
    activity: "Root of Nightmares",
    location: "Neomuna",
    requires: "Lightfall"
  },
  {
    imagePath: "kings-fall.jpg",
    activity: "King's Fall",
    location: "Legends",
    requires: "Free-to-Play"
  },
  {
    imagePath: "vow-of-the-disciple.jpg",
    activity: "Vow of the Disciple",
    location: "Throne World",
    requires: "Witch Queen"
  },
  {
    imagePath: "vault-of-glass.jpg",
    activity: "Vault of Glass",
    location: "Legends",
    requires: "Free-to-Play"
  },
  {
    imagePath: "deep-stone-crypt.jpg",
    activity: "Deep Stone Crypt",
    location: "Europa",
    requires: "Beyond Light"
  },
  {
    imagePath: "garden-of-salvation.jpg",
    activity: "Garden of Salvation",
    location: "Moon",
    requires: "Shadowkeep Pack"
  },
  {
    imagePath: "last-wish.jpg",
    activity: "Last Wish",
    location: "Dreaming City",
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
    raidLocation.innerHTML = `<h4>Location</h4>${randomRaid.location}`;
    raidRequires.innerHTML = `<h4>Requires</h4>${randomRaid.requires}`;
    extraChallenge.innerHTML = `<h4>Extra Challenge</h4>Run all ${randomClass} and only ${randomSubclass} subclass.`;
    raidDetails.style.display = 'block';
});

// Hide raid activity initially
//raidDetails.style.display = 'none';

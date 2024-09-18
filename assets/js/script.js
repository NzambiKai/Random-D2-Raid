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

const generateBtn = document.getElementById('generate-btn');
const raidActivityDiv = document.getElementById('raid-activity');
const raidImage = document.getElementById('raid-image');
const raidName = document.getElementById('raid-name');
const raidLocation = document.getElementById('raid-location');
const raidRequires = document.getElementById('raid-requires');

generateBtn.addEventListener('click', () => {
    const randomRaid = raidActivities[Math.floor(Math.random() * raidActivities.length)];
    raidImage.src = `/assets/img/raids/${randomRaid.imagePath}`;
    raidName.textContent = randomRaid.activity;
    raidLocation.textContent = `Location: ${randomRaid.location}`;
    raidRequires.textContent = `Requires: ${randomRaid.requires}`;
    raidActivityDiv.style.display = 'block';
});

// Hide raid activity initially
//raidActivityDiv.style.display = 'none';

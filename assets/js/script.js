const raidActivities = [
  {
    imagePath: "/images/raid1.jpg",
    activity: "Leviathan",
    location: "The Tower",
    requires: "Power Level 300"
  },
  {
    imagePath: "/images/raid2.jpg",
    activity: "Spire of Stars",
    location: "The Dreaming City",
    requires: "Power Level 320"
  },
  {
    imagePath: "/images/raid3.jpg",
    activity: "Last Wish",
    location: "The Dreaming City",
    requires: "Power Level 340"
  },
  {
    imagePath: "/images/raid4.jpg",
    activity: "Garden of Salvation",
    location: "The Black Garden",
    requires: "Power Level 360"
  },
  {
    imagePath: "/images/raid5.jpg",
    activity: "Deep Stone Crypt",
    location: "Europa",
    requires: "Power Level 380"
  },
  {
    imagePath: "/images/raid6.jpg",
    activity: "Vault of Glass",
    location: "The Glass Throne Room",
    requires: "Power Level 400"
  },
  {
    imagePath: "/images/raid7.jpg",
    activity: "Crota's End",
    location: "The Abyss",
    requires: "Power Level 420"
  },
  {
    imagePath: "/images/raid8.jpg",
    activity: "King's Fall",
    location: "The Taken King's Throne Room",
    requires: "Power Level 440"
  },
  {
    imagePath: "/images/raid9.jpg",
    activity: "Wrath of the Machine",
    location: "The Vault of Glass",
    requires: "Power Level 460"
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
    raidImage.src = randomRaid.imagePath;
    raidName.textContent = randomRaid.activity;
    raidLocation.textContent = `Location: ${randomRaid.location}`;
    raidRequires.textContent = `Requires: ${randomRaid.requires}`;
    raidActivityDiv.style.display = 'block';
});

// Hide raid activity initially
raidActivityDiv.style.display = 'none';

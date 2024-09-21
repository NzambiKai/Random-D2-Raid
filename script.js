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
    requires: "Shadowkeep"
  },
  {
    imagePath: "last-wish.jpg",
    activity: "Last Wish",
    location: "Dreaming City",
    requiresImagePath: "forsaken.png",
    requires: "Forsaken"
  }
];

const classes = ["Hunter", "Titan", "Warlock"];
const subclasses = ["Solar", "Arc", "Void", "Stasis", "Strand", "Prismatic"];

const generateBtn = document.getElementById('generate-btn');
const raidDetails = document.getElementById('raid-details');
const raidImage = document.getElementById('raid-image');
const raidName = document.getElementById('raid-name');
const locationName = document.getElementById('location-name');
const requiresImage = document.getElementById('requires-image');
const requiresName = document.getElementById('requires-name');
const challengeClassImage = document.getElementById('challenge-class-image');
const challengeClassName = document.getElementById('class-name');
const challengeSubclassImage = document.getElementById('challenge-subclass-image');
const challengeSubclassName = document.getElementById('subclass-name');
const button = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    const randomRaid = raidActivities[Math.floor(Math.random() * raidActivities.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomSubclass = subclasses[Math.floor(Math.random() * subclasses.length)];
  
    raidImage.src = `images/raids/${randomRaid.imagePath}`;
    raidName.textContent = randomRaid.activity;
    locationName.textContent = randomRaid.location;
    //requiresImage.src = `images/icons/${randomRaid.requiresImagePath}`;
    requiresName.textContent = randomRaid.requires;
    challengeClassImage.src = `images/class/${randomClass.toLowerCase()}.svg`;
    challengeClassName.textContent = randomClass;
    challengeSubclassImage.src = `images/subclass/${randomSubclass.toLowerCase()}.svg`;
    challengeSubclassName.textContent = randomSubclass;
    button.textContent = `Re-roll Raid Activity`;
    //`<h4>Extra Challenge</h4><p>Run all ${randomClass} and only ${randomSubclass} subclass.</p>`;
    raidDetails.style.display = 'block';
});

// Hide raid activity initially
raidDetails.style.display = 'none';

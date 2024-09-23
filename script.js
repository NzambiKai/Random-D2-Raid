const raidActivities = [
  {
    imagePath: "salvations-edge.jpg",
    activity: "Salvation's Edge",
    location: "Pale Heart",
    requires: "Requires The Final Shape"
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
    requires: "Requires Lightfall"
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
    requires: "Requires Witch Queen"
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
    requires: "Requires Beyond Light Pack"
  },
  {
    imagePath: "garden-of-salvation.jpg",
    activity: "Garden of Salvation",
    location: "Moon",
    requires: "Requires Shadowkeep Pack"
  },
  {
    imagePath: "last-wish.jpg",
    activity: "Last Wish",
    location: "Dreaming City",
    requires: "Requires Forsaken Pack"
  }
];

const classes = ["Hunter", "Titan", "Warlock"];
const subclasses = ["Solar", "Arc", "Void", "Stasis", "Strand", "Prismatic"];
const exoticWeapons = [
  "Ace of Spades",
  "Ager's Scepter",
  "Anarchy",
  "Arbalest",
  "Bad Juju",
  "Bastion",
  "Black Talon",
  "Borealis",
  "Buried Bloodline",
  "Centrifuse",
  "Cerberus+1",
  "Choir of One",
  "Cloudstrike",
  "Coldheart",
  "Collective Obligation",
  "Conditional Finality",
  "Crimson",
  "Cryosthesia 77K",
  "D.A.R.C.I.",
  "Dead Man's Tale",
  "Dead Messenger",
  "Deathbringer",
  "Delicate Tomb",
  "Deterministic Chaos",
  "Devil's Ruin",
  "Divinity",
  "Dragon's Breath",
  "Duality",
  "Edge of Action",
  "Edge of Concurrence",
  "Edge of Intent",
  "Ergo Sum",
  "Eriana's Vow",
  "Euphony",
  "Ex Diris",
  "Eyes of Tomorrow",
  "Fighting Lion",
  "Final Warning",
  "Forerunner",
  "Gjallarhorn",
  "Grand Overture",
  "Graviton Lance",
  "Hard Light",
  "Hawkmoon",
  "Heartshadow",
  "Heir Apparent",
  "Hierarchy of Needs",
  "Izanagi's Burden",
  "Jotunn",
  "Khvostov 7G-0X",
  "Le Monarque",
  "Legend of Acrius",
  "Leviathan's Breath",
  "Lord of Wolves",
  "Lorentz Driver",
  "Lumina",
  "Malfeasance",
  "Merciless",
  "Microcosm",
  "MIDA Multi-Tool",
  "Monte Carlo",
  "Necrochasm",
  "No Time to Explain",
  "One Thousand Voices",
  "Osteo Striga",
  "Outbreak Perfected",
  "Parasite",
  "Polaris Lance",
  "Prometheus Lens",
  "Quicksilver Storm",
  "Rat King",
  "Red Death Reformed",
  "Revision Zero",
  "Riskrunner",
  "Ruinous Effigy",
  "Salvation's Grip",
  "Skyburner's Oath",
  "Sleeper Simulant",
  "Still Hunt",
  "Sturm",
  "Sunshot",
  "SUROS Regime",
  "Sweet Business",
  "Symmetry",
  "Tarrabah",
  "Telesto",
  "Tessellation",
  "The Chaperone",
  "The Colony",
  "The Fourth Horseman",
  "The Huckleberry",
  "The Jade Rabbit",
  "The Lament",
  "The Last Word",
  "The Manticore",
  "The Navigator",
  "The Prospector",
  "The Queenbreaker",
  "The Wardcliff Coil",
  "Thorn",
  "Thunderlord",
  "Ticuu's Divination",
  "Tommy's Matchbook",
  "Touch of Malice",
  "Tractor Cannon",
  "Traveler's Chosen",
  "Trespasser",
  "Trinity Ghoul",
  "Truth",
  "Two-Tailed Fox",
  "Verglas Curve",
  "Vex Mythoclast",
  "Vexcalibur",
  "Vigilance Wing",
  "Wavesplitter",
  "Whisper of the Worm",
  "Wicked Implement",
  "Winterbite",
  "Wish-Ender",
  "Wish-Keeper",
  "Witherhoard",
  "Worldline Zero",
  "Xenophage"
];

function getRandomItems(arr, num) {
  const randomItems = [];
  for (let i = 0; i < num; i++) {
    randomItems.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  return randomItems;
}

const generateBtn = document.getElementById('generate-btn');
const raidDetails = document.getElementById('raid-details');
const raidImage = document.getElementById('raid-image');
const raidName = document.getElementById('raid-name');
const locationName = document.getElementById('location-name');
const requiresImage = document.getElementById('requires-image');
const requiresName = document.getElementById('requires-name');
const classImage = document.getElementById('class-image');
const className = document.getElementById('class-name');
const subclassImage = document.getElementById('subclass-image');
const subclassName = document.getElementById('subclass-name');
const exoticImage0 = document.getElementById('exotic-image0');
const exoticName0 = document.getElementById('exotic-name0');
const exoticImage1 = document.getElementById('exotic-image1');
const exoticName1 = document.getElementById('exotic-name1');
const exoticImage2 = document.getElementById('exotic-image2');
const exoticName2 = document.getElementById('exotic-name2');
const exoticImage3 = document.getElementById('exotic-image3');
const exoticName3 = document.getElementById('exotic-name3');
const exoticImage4 = document.getElementById('exotic-image4');
const exoticName4 = document.getElementById('exotic-name4');
const exoticImage5 = document.getElementById('exotic-image5');
const exoticName5 = document.getElementById('exotic-name5');
const challengeNameDisplay = document.getElementById('challengeNameDisplay');
const button = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
    const randomExoticWeapons = getRandomItems(exoticWeapons, 6);

    const randomRaid = raidActivities[Math.floor(Math.random() * raidActivities.length)];
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const randomSubclass = subclasses[Math.floor(Math.random() * subclasses.length)];
  
    raidImage.src = `images/raids/${randomRaid.imagePath}`;
    raidName.textContent = randomRaid.activity;
    locationName.textContent = randomRaid.location;
    //requiresImage.src = `images/icons/${randomRaid.requiresImagePath}`;
    requiresName.textContent = randomRaid.requires;
    classImage.src = `images/class/${randomClass.toLowerCase()}.svg`;
    classImage.dataset.name = `All ${randomClass}`;
    subclassImage.src = `images/subclass/${randomSubclass.toLowerCase()}.svg`;
    subclassImage.dataset.name = `All ${randomSubclass}`;
    exoticImage0.src = `images/exotics/${randomExoticWeapons[0]}.jpg`;
    exoticImage0.dataset.name = randomExoticWeapons[0];
    exoticImage1.src = `images/exotics/${randomExoticWeapons[1]}.jpg`;
    exoticImage1.dataset.name = randomExoticWeapons[1];
    exoticImage2.src = `images/exotics/${randomExoticWeapons[2]}.jpg`;
    exoticImage2.dataset.name = randomExoticWeapons[2];
    exoticImage3.src = `images/exotics/${randomExoticWeapons[3]}.jpg`;
    exoticImage3.dataset.name = randomExoticWeapons[3];
    exoticImage4.src = `images/exotics/${randomExoticWeapons[4]}.jpg`;
    exoticImage4.dataset.name = randomExoticWeapons[4];
    exoticImage5.src = `images/exotics/${randomExoticWeapons[5]}.jpg`;
    exoticImage5.dataset.name = randomExoticWeapons[5];
    button.textContent = `Re-roll Raid Activity`;
    //`<h4>Extra Challenge</h4><p>Run all ${randomClass} and only ${randomSubclass} subclass.</p>`;
    raidDetails.style.display = 'block';
});

const elements = document.querySelectorAll('.challenge-img');

elements.forEach((element) => {
  element.addEventListener('click', () => {
    const text = element.getAttribute('data-name');
    challengeNameDisplay.textContent = text;
  });
});

// Hide raid activity initially
raidDetails.style.display = 'none';
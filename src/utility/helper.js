const nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
export function generate() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}


export function getRandomMessage() {
  const messages = [
    "🚀",
    "Hello there!",
    "How are you doing?",
    "Have a great day!",
    "Something interesting is happening.",
    "🤣",
    "Keep up the good work!",
    "Good",
    "Nice Message",
    "Blast",
    "😍"
  ];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export function nthPrime(n) {
  var P = 0;

  function isPrime(x) {
    var isPrime = true;

    for (var d = 2; d <= Math.sqrt(x); d++) {
      if ((x / d) % 1 == 0) {
        isPrime = false;
        break;
      }
    }

    return isPrime;
  }

  for (var i = 1; 0 < n; i++) {
    if (isPrime(i)) {
      P = i;
      n--;
    }

    // we can skip the even numbers
    if (3 <= i) {
      i++;
    }
  }

  return P;
}

export const sideBarList1 = [
  {
    key: 1,
    value: "Home",
  },
  {
    key: 2,
    value: "Shorts",
  },
  {
    key: 3,
    value: "Subscriptions",
  },
];
export const sideBarList2 = [
  {
    key: 4,
    value: "History",
  },
  {
    key: 5,
    value: "Playlist",
  },
  {
    key: 6,
    value: "Your Videos",
  },
  {
    key: 7,
    value: "Watch Later",
  },
  {
    key: 8,
    value: "Liked Videos",
  },
];
export const sideBarList3 = [
  {
    key: 9,
    value: "Trending",
  },
  {
    key: 10,
    value: "Shopping",
  },
  {
    key: 11,
    value: "Music",
  },
  {
    key: 12,
    value: "Films",
  },
  {
    key: 13,
    value: "Live",
  },
  {
    key: 14,
    value: "Gaming",
  },
  {
    key: 15,
    value: "News",
  },
  {
    key: 16,
    value: "Sports",
  },
  {
    key: 17,
    value: "Courses",
  },
  {
    key: 18,
    value: "Podcast",
  },
];

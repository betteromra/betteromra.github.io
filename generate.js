const allTechnologies = {
  list: [
    {
      name: "C#",
    },
    {
      name: "C++",
    },
    {
      name: "Python",
    },
    {
      name: "Java",
    },
    {
      name: "JS",
    },
    {
      name: "Unreal",
    },
    {
      name: "Unity",
    },
    {
      name: "Github",
    },
    {
      name: "Jira",
    },
    {
      name: "Asana",
    },
    {
      name: "Adobe",
    }
  ]
};

const allStores = {
  list: [
    {
      name: "Steam",
    },
    {
      name: "Epic",
    },
    {
      name: "Itch.io",
    },
    {
      name: "Nintendo",
    },
    {
      name: "Playstation",
    },
    {
      name: "Xbox",
    }
  ]
};

// Skill appris 
// Mechanics implémenté 
// Tâches effectués sur le projet 

const allGames = {
  list: [
    {
      name: "THE SIGNAL: Stranded on Sirenis",
      logo: true,
      date: "Janurary 2025 ~ October 2025",
      technologies: [5, 1, 7, 8],
      description: "A survival crafting extraction shooter game where players explore diverse environments, gather resources, build bases and strategically combat on the alien planet.",
      role: "Gameplay Programmer",
      team: 21,
      time: "9 months",
      genre: ["Survival", "Crafting", "Extraction shooter", "Base building"],
      style: ["Science fiction", "Realistic", "Stylize"],
      link: ["https://store.steampowered.com/app/1830110/THE_SIGNAL_Stranded_on_Sirenis/"],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "The Melty Way",
      logo: true,
      date: "December 2021 ~ Present", // December 2021 ~ March 2026
      technologies: [6, 0, 7, 8, 10],
      description: "A puzzle-platformer where players control a shape-shifting slime, navigating vibrant levels, solving puzzles, avoiding traps and using creative movement to explore hidden paths and overcome challenges.",
      role: "Game Programmer, Artist, Game Design, Marketer",
      team: 2,
      time: "4 years",
      genre: ["Plateformer", "Puzzle", "Adventure"],
      style: ["Pixel Art", "Fantasy"],
      link: ["https://store.steampowered.com/app/3990570/The_Melty_Way/"],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Citywars Savage",
      logo: true,
      date: "Janurary 2021 ~ March 2021",
      technologies: [6],
      description: "An indie MMORPG combining fast-paced combat, sandbox building, questing and cooperative PvE. With classless progression, gear upgrades and community-driven content creation.",
      role: "Gameplay Programmer, Game Design",
      team: 8,
      time: "3 months",
      genre: ["MMORPG", "Sandbox", "Crafting", "Building"],
      style: ["Cartoon", "Cubic"],
      link: ["https://store.steampowered.com/app/910800/Citywars_Savage/"],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Zero Six Booting",
      logo: true,
      date: "March 2021 ~ April 2021",
      technologies: [6, 0, 7, 10],
      description: "A swift ninja armed with a deadly spear use a grappling hook, slow down time and rewind time in this intense, action-adventure plateformer.",
      role: "Game Programmer, Artist, Game Design",
      team: 1,
      time: "2 months",
      genre: ["Hack 'n' Slash", "Time manipulation", "Plateformer"],
      style: ["Pixel Art", "Science fiction"],
      link: ["https://betteromra.itch.io/zero-six-booting"],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Dream Catcher",
      logo: true,
      date: "Feburary 2024 ~ April 2024",
      technologies: [6, 0, 7],
      description: "In this whimsical multiplayer platformer, you play as a tiny snail journeying through surreal dreamscapes. Work together with your friend to collect scattered dreams and keep the dreamer peacefully asleep.",
      role: "Gameplay Programmer",
      team: 8,
      time: "3 months",
      genre: ["Plateformer", "Coop"],
      style: ["Vector art", "Fantasy"],
      link: [],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "The Orc Cook",
      logo: true,
      date: "December 2020 ~ January 2021",
      technologies: [6, 0, 10],
      description: "An orc chef combines ingredients in precise sequences to create hearty meals. Each successful combination, boosts reputation and satisfies the tribe's hunger in a puzzle of timing and culinary mastery.",
      team: 1,
      time: "2 months",
      role: "Game Programmer, Artist, Game Design",
      genre: ["Match-3", "Puzzle"],
      style: ["Vector art", "Fantasy"],
      link: ["https://betteromra.itch.io/the-orc-cook"],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Sightline",
      logo: true,
      date: "17 Feburary 2023 ~ 20 Feburary 2023",
      technologies: [6, 0, 10],
      description: "Play as a cunning outlaw in the Wild West, planning heists, dodging sheriffs and looting banks for fortune and freedom.",
      role: "Game Programmer, Artist, Game Design",
      team: 3,
      time: "3 days",
      genre: ["Stealth", "Extraction", "Time manipulation"],
      style: ["Far west", "Vector art"],
      link: ["https://toominio.itch.io/sightline"],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Plateformer Squelletron",
      logo: false,
      date: "October 2020 ~ December 2020",
      technologies: [6, 0, 7, 10],
      description: "A skeleton traverses an endlessly generated world, jumping across platforms, avoiding dangers and exploring haunting, ever-changing landscapes full of surprises.",
      role: "Game Programmer, Artist, Game Design",
      team: 2,
      time: "3 months",
      genre: ["Plateformer", "Procedural generation"],
      style: ["Dark Fantasy", "Vector art"],
      link: [],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Sorcière avec éclair de feu versus Chevaliers avec nimbus 2001 sauf que les balais sont interdit",
      logo: false,
      date: "September 2020 ~ October 2020",
      technologies: [6, 0],
      description: "A strategic, turn-based adventure where you, a witch, navigate enemies, plan moves carefully and reach the finish line triumphantly.",
      role: "Game Programmer, Artist, Game Design",
      team: 1,
      time: "2 months",
      genre: ["Turn-Based", "Stealth"],
      style: ["Fantasy"],
      link: [],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Attaque des patates",
      logo: false,
      date: "October 2020 ~ December 2020",
      technologies: [6, 0],
      description: "A humble village boy sets out on a thrilling RPG adventure, exploring vast lands, making loyal friends, engaging in strategic turn-based battles and confronting a powerful necromancer to save the world.",
      role: "Game Programmer",
      team: 4,
      time: "3 months",
      genre: ["RPG", "Turn-Based"],
      style: ["Dark Fantasy", "Vector art"],
      link: [],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Mille Etage",
      logo: false,
      date: "November 2020 ~ December 2020",
      technologies: [6, 0],
      description: "Build and manage your hotel empire, upgrade floors, attract guests, optimize profits, automate operations and watch income grow effortlessly.",
      role: "Game Programmer, Artist, Game Design",
      team: 1,
      time: "2 months",
      genre: ["Idle"],
      style: [],
      link: [],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Hinvie Zible",
      logo: false,
      date: "November 2019 ~ December 2019",
      technologies: [6, 0, 10],
      description: "Small prototype that lets you be a ghost in a graveyard and use different ability.",
      role: "Game Programmer, Artist, Game Design",
      team: 1,
      time: "2 months",
      genre: [],
      style: [],
      link: [],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    },
    {
      name: "Tower Defense",
      logo: false,
      date: "March 2017 ~ April 2027",
      technologies: [6, 0],
      description: "My first game ever, a tower defense where you strategically place towers, stop enemies, survive waves, defend your base.",
      role: "Game Programmer, Artist, Game Design",
      team: 1,
      time: "2 weeks",
      genre: ["Tower defense"],
      style: [],
      link: [],

      content: ["<h3>Introduction</h3>"],
      takeaways: ``
    }
  ]
};

const contentDiv = document.querySelector(".games");
contentDiv.innerHTML = '<div class="game-content-space"></div>';
document.querySelector('.game-content-space').style.position = "absolute";

parent = 'games';

for (let i = 0; i < allGames.list.length; i++) {
  let game = allGames.list[i];
  addGame(parent, game);
}

parent = 'technologies';

for (let i = 0; i < allTechnologies.list.length; i++) {
  const technology = allTechnologies.list[i];
  addTechnology(parent, technology);
}

function addGame(parent, game) {

  const contentDiv = document.querySelector("." + parent);

  // thumbnail
  const trimmerName = game.name.replace(/[^a-zA-Z0-9]/g, "");

  imageThumbnail = "background-image: url('Images/Thumbnails/" + trimmerName + " main.jpg');"
  imageThumbnailOver = "background-image: url('Images/Thumbnails/" + trimmerName + " gameplay.jpg');"

  date = '<i>' + game.date + '</i>';

  gameName = '<h2>' + game.name + '</h2>';

  description = '<p>' + game.description + '</p>';

  const contentThumbnail = '<div class="thumbnail-content">' + date + gameName + description + '</div>';

  imageThumbnail = '<div class="image-thumbnail" style="' + imageThumbnail + '"></div>';
  imageThumbnailOver = '<div class="image-thumbnail-over" style="' + imageThumbnailOver + '"></div>';

  technologiesHtml = '<div class="game-technologies">';

  for (let i = 0; i < game.technologies.length; i++) {

    const technology = allTechnologies.list[game.technologies[i]];

    image = '<div class="game-technology">';
    image += getImageTechnology(getNameTechnology(technology.name), "game-technology-image");
    image += '</div>';

    technologiesHtml += image;
  }

  technologiesHtml += '</div>';

  const thumbnail = '<div class="game-thumbnail">' + technologiesHtml + contentThumbnail + imageThumbnail + imageThumbnailOver + '</div>';

  // Content

  contentHeaderHtml = '<div class="game-content-header">';

  contentHeaderTitleHtml = '<div class="game-content-header-title">';
  if (game.logo) {
    const logoImage = '<img src="Images/Logos/' + trimmerName + '.png">';
    contentHeaderTitleHtml += '<div class="game-content-header-logo">' + logoImage + '</div>';
  } else {
    contentHeaderTitleHtml += '<h2 class="game-content-header-title">' + game.name + '</h2>';
  }

  contentHeaderTitleHtml += '<div class="game-content-header-links">' + createArrayGameLink(game.link, "game-link") + '</div>';

  contentHeaderTitleHtml += '</div>';

  contentHeaderHtml += contentHeaderTitleHtml;

  contentHeaderHtml += '<div class="game-content-header-tag">' + createArrayElement(game.genre, "game-genre") + createArrayElement(game.style, "game-style") + '</div>';

  jobHtml = '<div class="game-content-header-job">';

  iconImage = '<img class="job-icon" src="Images/Icons/role.svg">';
  jobHtml += '<div class="game-content-header-role">' + iconImage + game.role + '</div>';
  iconImage = '<img class="job-icon" src="Images/Icons/team.svg">';
  jobHtml += '<div class="game-content-header-team">' + iconImage + game.team + '</div>';
  iconImage = '<img class="job-icon" src="Images/Icons/time.svg">';
  jobHtml += '<div class="game-content-header-time">' + iconImage + game.time + '</div>';

  jobHtml += '</div>';

  contentHeaderHtml += jobHtml;

  contentHeaderHtml += '</div>';

  takeawaysHtml = '<div class="game-content-takeaways"><h3>' + game.takeaways + '</div>';

  contentHtml = '<div class="game-content">' + contentHeaderHtml + createArrayElement(game.content, "") + takeawaysHtml + '</div>';

  // Add it to the page

  const gameHtml = '<div class="game">' + thumbnail + contentHtml + '</div>'

  contentDiv.innerHTML += gameHtml;
}

function addTechnology(parent, technology) {

  const contentDiv = document.querySelector("." + parent);

  const image = getImageTechnology(getNameTechnology(technology.name), "image-technology");

  technologyName = '<p>' + technology.name + '</p>';

  const technologyHtml = '<div class="technology">' + image + technologyName + '</div>';

  contentDiv.innerHTML += technologyHtml;
}

function getNameTechnology(name) {

  const namePlus = name.replace(/\+/g, "Plus");
  const nameSharp = namePlus.replace(/\#/g, "Sharp");
  const trimmerName = nameSharp.replace(/[^a-zA-Z0-9]/g, "");
  return trimmerName;

}

function createArrayElement(list, classHtml) {
  html = "";
  if (classHtml == "") {

    for (let i = 0; i < list.length; i++) {
      html += list[i];
    }

  } else {

    for (let i = 0; i < list.length; i++) {
      html += '<div class="' + classHtml + '">' + list[i] + '</div>';
    }

  }
  return html
}

function createArrayGameLink(list, classHtml) {
  html = "";

  for (let i = 0; i < list.length; i++) {

    link = list[i];

    imagesStore = "";
    if (link.includes("steam")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[0].name + ".png');";
    }
    else if (link.includes("epicgames")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[1].name + ".png');";
    }
    else if (link.includes("itch.io")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[2].name + ".png');";
    }
    else if (link.includes("nintendo")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[3].name + ".png');";
    }
    else if (link.includes("playstation")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[4].name + ".png');";
    }
    else if (link.includes("xbox")) {
      imagesStore = "background-image: url('Images/Stores/" + allStores.list[5].name + ".png');";
    }

    if (imagesStore != "") {
      html += '<a target="_blank" class="' + classHtml + '" href="' + link + '" style="' + imagesStore + '"></a>';
    }
  }
  return html
}

function getImageTechnology(name, classImage) {

  const imageTechnology = "background-image: url('Images/Technologies/" + name + ".png');";

  return '<div class="' + classImage + '" style="' + imageTechnology + '"></div>';
}
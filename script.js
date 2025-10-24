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

const allGames = {
  list: [
    {
      name: "THE SIGNAL: Stranded on Sirenis",
      date: "October 2025",
      technologies: [5, 1, 7, 8],
      description: "A survival crafting extraction shooter game where players explore diverse environments, gather resources, build bases and strategically combat on the alien planet.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "The Melty Way",
      date: "March 2026",
      technologies: [6, 0, 7, 8, 10],
      description: "A puzzle-platformer where players control a shape-shifting slime, navigating vibrant levels, solving puzzles, avoiding traps and using creative movement to explore hidden paths and overcome challenges.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Citywars Savage",
      date: "March 2021",
      technologies: [6],
      description: "An indie MMORPG combining fast-paced combat, sandbox building, questing and cooperative PvE. With classless progression, gear upgrades and community-driven content creation.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Zero Six Booting",
      date: "April 2021",
      technologies: [6, 0, 7, 10],
      description: "A swift ninja armed with a deadly spear use a grappling hook, slow down time and rewind time in this intense, action-adventure plateformer.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Dream Catcher",
      date: "April 2024",
      technologies: [6, 0, 7],
      description: "In this whimsical multiplayer platformer, you play as a tiny snail journeying through surreal dreamscapes. Work together with your friend to collect scattered dreams and keep the dreamer peacefully asleep.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "The Orc Cook",
      date: "January 2021",
      technologies: [6, 0, 10],
      description: "An orc chef combines ingredients in precise sequences to create hearty meals. Each successful combination, boosts reputation and satisfies the tribe's hunger in a puzzle of timing and culinary mastery.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Plateformer Squelletron",
      date: "December 2020",
      technologies: [6, 0, 7, 10],
      description: "A skeleton traverses an endlessly generated world, jumping across platforms, avoiding dangers and exploring haunting, ever-changing landscapes full of surprises.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Sorcière avec éclair de feu versus Chevaliers avec nimbus 2001 sauf que les balais sont interdit",
      date: "October 2020",
      technologies: [6, 0],
      description: "A strategic, turn-based adventure where you, a witch, navigate enemies, plan moves carefully and reach the finish line triumphantly.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Attaque des patates",
      date: "December 2020",
      technologies: [6, 0],
      description: "A humble village boy sets out on a thrilling RPG adventure, exploring vast lands, making loyal friends, engaging in strategic turn-based battles and confronting a powerful necromancer to save the world.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Mille Etage",
      date: "November 2020",
      technologies: [6, 0],
      description: "Build and manage your hotel empire, upgrade floors, attract guests, optimize profits, automate operations and watch income grow effortlessly.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Hinvie Zible",
      date: "October 2019",
      technologies: [6, 0, 10],
      description: "Small prototype that lets you be a ghost in a graveyard and use different ability.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    },
    {
      name: "Tower Defense",
      date: "March 2017",
      technologies: [6, 0],
      description: "My first ever game, a tower defense where you strategically place towers, stop enemies, survive waves, defend your base.",
      content: ["<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>",
        "<h3>Introduction</h3>"]
    }
  ]
};

const contentDiv = document.querySelector(".games");
contentDiv.innerHTML = '<div class="game-content-space"></div>';
document.querySelector('.game-content-space').style.position = "absolute";

parent = 'games';

for (let i = 0; i < allGames.list.length; i++) {
  const game = allGames.list[i];
  addGame(parent, game.name, game.date, game.technologies, game.description, game.content);
}

parent = 'technologies';

for (let i = 0; i < allTechnologies.list.length; i++) {
  const technology = allTechnologies.list[i];
  addTechnology(parent, technology.name);
}

const gamesThumbnail = document.querySelectorAll('.game-thumbnail');

animationId = 0;

gamesThumbnail.forEach(gameThumbnail => {
  gameThumbnail.addEventListener('click', () => {

    const game = gameThumbnail.parentElement;
    const gamesToRemoveOpen = document.querySelectorAll('.open');

    gamesToRemoveOpen.forEach(gameToRemoveOpen => {
      if (gameToRemoveOpen != game) gameToRemoveOpen.classList.remove('open');
    });

    game.classList.toggle('open');

    gameContentSpace = document.querySelector('.game-content-space');

    if (game.classList.contains('open')) {
      gameContent = game.querySelector('.game-content');

      animationId = requestAnimationFrame(() => syncHeight(gameContentSpace, gameContent));

      setTimeout(() => {
        cancelAnimationFrame(animationId);
        gameContentSpace.style.height = gameContent.offsetHeight + "px";
      }, 200);

      const gameParent = game.parentElement;

      const childPerRow = getChildPerRow();
      index = Array.prototype.indexOf.call(gameParent.children, game) + 1;
      const indexGameContentSpace = Array.prototype.indexOf.call(gameParent.children, gameContentSpace);

      if (index > indexGameContentSpace) index -= 1;

      newIndexGameContentSpace = Math.ceil(index / childPerRow) * childPerRow;
      if (newIndexGameContentSpace > indexGameContentSpace) newIndexGameContentSpace += 1;

      gameParent.insertBefore(gameContentSpace, gameParent.children[newIndexGameContentSpace]);

      gameContentSpace.style.position = "relative";
    } else {
      gameContentSpace.style.height = 0;
      setTimeout(() => {
        gameContentSpace.style.position = "absolute";
      }, 200);
    }
  });
});

function syncHeight(gameContentSpace, gameContent) {

  gameContentSpace.style.height = gameContent.offsetHeight + 20 + "px";

  animationId = requestAnimationFrame(() => syncHeight(gameContentSpace, gameContent));
}


function addGame(parent, name, date, technologies, description, content) {

  const contentDiv = document.querySelector("." + parent);

  const trimmerName = name.replace(/[^a-zA-Z0-9]/g, "");

  imageThumbnail = "background-image: url('Images/Thumbnails/" + trimmerName + " main.jpg" + "');"
  imageThumbnailOver = "background-image: url('Images/Thumbnails/" + trimmerName + " gameplay.jpg" + "');"

  date = '<i>' + date + '</i>';

  name = '<h2>' + name + '</h2>';

  description = '<p>' + description + '</p>';

  const contentThumbnail = '<div class="thumbnail-content">' + date + name + description + '</div>';

  imageThumbnail = '<div class="image-thumbnail" style="' + imageThumbnail + '"></div>';
  imageThumbnailOver = '<div class="image-thumbnail-over" style="' + imageThumbnailOver + '"></div>';

  technologiesHtml = '<div class="game-technologies">';

  for (let i = 0; i < technologies.length; i++) {

    const technology = allTechnologies.list[technologies[i]];

    image = '<div class="game-technology">';
    image += getImageTechnology(getNameTechnology(technology.name), "game-technology-image");
    image += '</div>';

    technologiesHtml += image;
  }

  technologiesHtml += '</div>';

  const thumbnail = '<div class="game-thumbnail">' + technologiesHtml + contentThumbnail + imageThumbnail + imageThumbnailOver + '</div>';

  contentHtml = '<div class="game-content">';

  for (let i = 0; i < content.length; i++) {

    const gameContent = content[i];

    contentHtml += gameContent;
  }

  contentHtml += '</div>';

  const game = '<div class="game">' + thumbnail + contentHtml + '</div>'

  contentDiv.innerHTML += game;
}

function addTechnology(parent, name) {

  const contentDiv = document.querySelector("." + parent);

  const image = getImageTechnology(getNameTechnology(name), "image-technology");

  name = '<p>' + name + '</p>';

  const technology = '<div class="technology">' + image + name + '</div>';

  contentDiv.innerHTML += technology;
}

function getNameTechnology(name) {
  const namePlus = name.replace(/\+/g, "Plus");
  const nameSharp = namePlus.replace(/\#/g, "Sharp");
  const trimmerName = nameSharp.replace(/[^a-zA-Z0-9]/g, "");
  return trimmerName;

}

function getImageTechnology(name, classImage) {
  const imageTechnology = "background-image: url('Images/Technologies/" + name + ".png" + "');"

  return '<div class="' + classImage + '" style="' + imageTechnology + '"></div>';
}

function getChildPerRow() {

  if (window.innerWidth < 775) {
    return 1;
  } else if (window.innerWidth < 1120) {
    return 2;
  } else if (window.innerWidth < 1465) {
    return 3;
  } else {
    return 4;
  }
}
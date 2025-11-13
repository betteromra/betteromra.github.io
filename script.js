const gamesThumbnail = document.querySelectorAll('.game-thumbnail');

animationId = 0;

gamesThumbnail.forEach(gameThumbnail => {
  gameThumbnail.addEventListener('click', () => {

    let game = gameThumbnail.parentElement;
    const gamesToRemoveOpen = document.querySelectorAll('.open');

    gamesToRemoveOpen.forEach(gameToRemoveOpen => {
      if (gameToRemoveOpen != game) {
        if (gameToRemoveOpen.classList.contains('open')) {
          gameToRemoveOpen.classList.remove('open');

          unloadVideo(gameToRemoveOpen);
        }
      }
    });

    game.classList.toggle('open');

    gameContentSpace = document.querySelector('.game-content-space');
    gameContentSpace.style.height = 0;

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

      // Load all the video
      loadVideo(game)

    } else {
      gameContentSpace.style.height = 0;
      setTimeout(() => {
        gameContentSpace.style.position = "absolute";
      }, 200);

      // Unload all the video
      unloadVideo(game);
    }
  });
});

function unloadVideo(parent) {
  const videos = parent.querySelectorAll("video");

  videos.forEach(v => {
    v.pause();
    v.removeAttribute("src");
    v.load(); // Unload it
  });
}

function loadVideo(parent) {
  const videos = parent.querySelectorAll("video");

  videos.forEach(v => {
    const realSrc = v.getAttribute("data-src");
    v.setAttribute("src", realSrc);
    v.load();
    v.play();
  });
}

function syncHeight(gameContentSpace, gameContent) {

  gameContentSpace.style.height = gameContent.offsetHeight + 20 + "px";

  animationId = requestAnimationFrame(() => syncHeight(gameContentSpace, gameContent));
}

window.addEventListener('resize', () => {

  const gameContentSpace = document.querySelector('.game-content-space');
  const game = document.querySelector('.open');

  if (game) {

    const gameParent = game.parentElement;
    gameContentSpace.style.height = gameContent.offsetHeight + "px";

    const childPerRow = getChildPerRow();
    index = Array.prototype.indexOf.call(gameParent.children, game) + 1;
    const indexGameContentSpace = Array.prototype.indexOf.call(gameParent.children, gameContentSpace);

    if (index > indexGameContentSpace) index -= 1;

    newIndexGameContentSpace = Math.ceil(index / childPerRow) * childPerRow;
    if (newIndexGameContentSpace > indexGameContentSpace) newIndexGameContentSpace += 1;

    gameParent.insertBefore(gameContentSpace, gameParent.children[newIndexGameContentSpace]);
  }

});


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

const videos = document.querySelectorAll('.scroll-video');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target;
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.5 // play when 50% of the video is visible
});

videos.forEach(video => observer.observe(video));
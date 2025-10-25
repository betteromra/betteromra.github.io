const gamesThumbnail = document.querySelectorAll('.game-thumbnail');

animationId = 0;

gamesThumbnail.forEach(gameThumbnail => {
  gameThumbnail.addEventListener('click', () => {

    let game = gameThumbnail.parentElement;
    const gamesToRemoveOpen = document.querySelectorAll('.open');

    gamesToRemoveOpen.forEach(gameToRemoveOpen => {
      if (gameToRemoveOpen != game) gameToRemoveOpen.classList.remove('open');
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
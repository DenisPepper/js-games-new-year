import { ActionsHandler } from './actions-handler.js';
import { Background } from './background.js';
import { Player } from './player.js';
import { PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT } from './settings.js';

const canvas = document.querySelector('.canvas');
canvas.width = PLAYGROUND_WIDTH;
canvas.height = PLAYGROUND_HEIGHT;
const context = canvas.getContext('2d');

const playerImage = document.querySelector('.player-image');
const bgImage = document.querySelector('.background-image');

window.addEventListener('load', () => {
  const actions = new ActionsHandler();
  const player = new Player(canvas.width, canvas.height, playerImage);
  const background = new Background(canvas.width, canvas.height, bgImage);

  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    background.draw(context);
    background.update();
    player.draw(context);
    player.update(actions);
    requestAnimationFrame(animate);
  }

  animate();
});

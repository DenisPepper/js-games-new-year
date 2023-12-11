import { ActionsHandler } from './actions-handler.js';
import { Player } from './player.js';
import { PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT } from './settings.js';

const canvas = document.querySelector('.canvas');
canvas.width = PLAYGROUND_WIDTH;
canvas.height = PLAYGROUND_HEIGHT;
const context = canvas.getContext('2d');

const playerImage = document.querySelector('.player-image');

window.addEventListener('load', () => {
  const actions = new ActionsHandler();

  const player = new Player(canvas.width, canvas.height, playerImage);

  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(context);
    player.update(actions);
    requestAnimationFrame(animate);
  }

  animate();
});

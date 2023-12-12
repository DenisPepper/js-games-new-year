import { ActionsHandler } from './actions-handler.js';
import { Background } from './background.js';
import { Enemy } from './enemy.js';
import { Player } from './player.js';
import { PLAYGROUND_WIDTH, PLAYGROUND_HEIGHT } from './settings.js';

const canvas = document.querySelector('.canvas');
canvas.width = PLAYGROUND_WIDTH;
canvas.height = PLAYGROUND_HEIGHT;
const context = canvas.getContext('2d');

const playerImage = document.querySelector('.player-image');
const bgImage = document.querySelector('.background-image');
const enemyImage = document.querySelector('.enemy-image');

const actions = new ActionsHandler();
const player = new Player(canvas.width, canvas.height, playerImage);
const background = new Background(canvas.width, canvas.height, bgImage);

const enemies = [];
let enemyLastTime = 0;
let enemyTimer = 0;
let enemyInterval = 1000;
let randomEnemyInterval = Math.random() * 1000 + 500;

function addEnemy(enemyDeltaTime) {
  if (enemyTimer > enemyInterval + randomEnemyInterval) {
    enemies.push(new Enemy(canvas.width, canvas.height, enemyImage));
    enemyTimer = 0;
  } else {
    enemyTimer += enemyDeltaTime;
  }
  enemies.forEach((enemy) => {
    enemy.draw(context);
    enemy.update();
  });
}

function animate(timeStamp) {
  const enemyDeltaTime = timeStamp - enemyLastTime;
  enemyLastTime = timeStamp;

  context.clearRect(0, 0, canvas.width, canvas.height);

  background.draw(context);
  background.update();

  player.draw(context);
  player.update(actions);

  addEnemy(enemyDeltaTime);

  requestAnimationFrame(animate);
}

window.addEventListener('load', () => {
  animate(enemyLastTime);
});

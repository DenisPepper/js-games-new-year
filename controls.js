const MAX_ENEMY_COUNT = 100;
const MIN_ENEMY_COUNT = 20;
const enemyCount = document.querySelector('.enemy-count>input');

if (enemyCount) {
  enemyCount.addEventListener('input', () => {
    if(enemyCount.value > MAX_ENEMY_COUNT) {
        enemyCount.value = MAX_ENEMY_COUNT;
    } else if (enemyCount.value < MIN_ENEMY_COUNT) {
        enemyCount.value = MIN_ENEMY_COUNT;
    } 
  });
}

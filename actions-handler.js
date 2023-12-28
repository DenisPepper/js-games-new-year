const keyStore = new Set(['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight']);

export class ActionsHandler {
  constructor() {
    this.keys = new Set();
    this.init();
  }

  init() {
    window.addEventListener('keydown', (evt) => {
      if (keyStore.has(evt.key)) this.keys.add(evt.key);
    });
    window.addEventListener('keyup', (evt) => {
      if (keyStore.has(evt.key)) this.keys.delete(evt.key);
    });
    window.addEventListener('touchstart', (evt) => {
      this.keys.add('Jump');
    });
    window.addEventListener('touchend', (evt) => {
      this.keys.delete('Jump');
    });
  }
}

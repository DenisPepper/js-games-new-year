export class Enemy {
  constructor(playgroundWidth, playgroundHeight, image) {
    this.image = image;
    this.playgroundWidth = playgroundWidth;
    this.playgroundHeight = playgroundHeight;
    this.width = 150;
    this.height = 150;
    this.x = this.playgroundWidth;
    this.y = this.playgroundHeight - this.height;
    this.frameX = 0;
    this.speed = 8;
  }

  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.width,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  update() {
    this.x -= this.speed;
  }
}

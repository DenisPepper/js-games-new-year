export class Player {
  constructor(playgroundWidth, playgroundHeight, image) {
    this.image = image;
    this.playgroundWidth = playgroundWidth;
    this.playgroundHeight = playgroundHeight;
    this.width = 114;
    this.height = 105;
    this.x = 0;
    this.y = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.speed = 0;
    this.velocityY = 0;
    this.gravity = 1;
    this.toStart();
  }

  draw(context) {
    //context.fillStyle = 'white';
    //context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.frameX * this.width,
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  toStart() {
    this.y = this.playgroundHeight - this.height;
  }

  update(actions) {
    this.x += this.speed;
    if (actions.keys.has('ArrowUp') && this.onGround()) {
      this.velocityY += 30;
    } else if (actions.keys.has('ArrowRight')) {
      this.speed = 5;
    } else if (actions.keys.has('ArrowLeft')) {
      this.speed = -5;
    } else {
      this.speed = 0;
    }

    if (this.x < 0) this.x = 0;
    if (this.x > this.playgroundWidth - this.width)
      this.x = this.playgroundWidth - this.width;

    // вертикальное движение
    this.y -= this.velocityY;

    if (!this.onGround()) {
      this.velocityY -= this.gravity;
      this.frameX = 1;
    } else {
      this.velocityY = 0;
      this.frameX = 0;
    }
    if (this.y > this.playgroundHeight - this.height)
      this.y = this.playgroundHeight - this.height;
  }

  onGround() {
    return this.y >= this.playgroundHeight - this.height;
  }
}

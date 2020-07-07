class polygon {
    constructor(x, y,r) {
     
      this.body = Bodies.circle(x, y, r);
      this.radius = r;
     
      this.image = loadImage("polygonimg.png")
      World.add(world, this.body);
  
  
    }
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
  
      fill("cyan")
      image(this.image, 0, 0,this.radius, this.radius);
      pop();
    }
  };
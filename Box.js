class Box {
    constructor(x, y, width, height) {
      var options = {
        isStatic: false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visiblity = 255
      World.add(world, this.body);
    }
    display(){
     // console.log(this.body.speed)

      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed < 3 ){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      } else {
        World.remove(world, this.body)
        push()
        this.visiblity = this.visiblity-5
        tint(255,this.visiblity)
        rect(0, 0, this.width, this.height);
        pop()
      }
    }
    scoress() {
      if(this.visiblity < 0 && this.visiblity > -105){
      score++
      }
      }
  };
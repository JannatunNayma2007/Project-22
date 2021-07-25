class Bob
{
  constructor(x, y, r) 
  {

	var ball_options = {
		restitution: 0.8
	  }
    
      this.body = Bodies.circle(x, y, r, ball_options);
      this.r = r;
      World.add(world,this.body);

  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    ellipseMode(RADIUS);
    fill("white");
    ellipse(this.body.position.x,this.body.position.y,this.r);
    pop();
  }
  
}
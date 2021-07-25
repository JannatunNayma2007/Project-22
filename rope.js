class Rope 
   {
   constructor(pointA,bodyB) 
  {
	   this.pointA = pointA;

	var con_options ={
			pointA : pointA,
			bodyB : bodyB,
			length : 250,
			stiffness : 0.1
		 }

   this.body = Constraint.create(con_options);
   World.add(world,this.body);

  }

  show() {
    push();
    strokeWeight(2);
    stroke(0);
    line(this.pointA.x,this.pointA.y,this.body.bodyB.position.x,this.body.bodyB.position.y);
    pop();
  }
  
}

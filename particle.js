//fireWorks
function Particle(x,y,hu,seed) {
	this.pos = createVector(x,y);
    this.seed = seed;
    this.lifespan= 255;
    this.hu=hu;
    
    if (this.seed){
	  this.vel = createVector(0,random(-12,-8));
	  
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(1,10));
    }
    this.acc = createVector(0,0);
	this.applyForce = function(force){
		this.acc.add(force);
	}
  this.update=function(){
//
    if(!this.seed){
      this.vel.mult(0.85);
      this.lifespan -=2;
    }
  
	this.vel.add(this.acc);
	this.pos.add(this.vel);
	this.acc.mult(0);
  }
	this.show=function(){
      colorMode(HSB)
      if(!this.seed){
        stroke(hu,255,255, this.lifespan);
        strokeWeight(2);
      }else{
        stroke(255);
        strokeWeight(4);
      }
		point(this.pos.x,this.pos.y);
	}
    this.done=function(){
      if (this.lifespan <0){
        return true;
      }else{
        return false;
      }
    }

}

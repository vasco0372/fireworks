function Firework(){
  this.firework = new Particle(random(width),height,this.hu,true);
  this.reachTop = false;
  this.particles = [];
  this.hu=random(255);
  
  this.done=function(){
    if (this.exploded && this.particles.length == 0){
      return true;
    } else {
      return false;
    }
  }
  
  this.update = function(){
    if (!this.exploded){
      this.firework.applyForce(gravity);
      this.firework.update();
        
      if (this.firework.vel.y >= 0){
          this.reachTop = true;
          this.explode();
        }
    }
    
    for (var i=this.particles.length-1; i>=0; i--){
    this.particles[i].applyForce(gravity);
    this.particles[i].update();
      if(this.particles[i].done()){
        this.particles.splice(i,1);
      }
    }
  }
  
  this.explode = function (){
     for ( var i=0; i<150; i++){
        var secondary = new Particle(this.firework.pos.x, this.firework.pos.y,this.hu,false);
        this.particles.push(secondary);
       this.exploded=true;
    }
  }
  
  this.show = function(){
    if (!this.reachTop){
      this.firework.show();
      stroke(this.hu);
    }
    for ( var j=0; j<this.particles.length; j++) {
      this.particles[j].show();
    }
  }

}


  
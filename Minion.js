class Minion {
    constructor(x,y,w,h)
      {
          var options = { 
        density: 5, 
        frictionAir: 0
      };
          this.x=x;
          this.y=y;
          this.w=70;
          this.h=70
          this.image=loadImage("monster2.png");
          this.body=Bodies.rectangle(this.x, this.y,this.w,this.h, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var santaPos=this.body.position;		
              push()
              translate(santaPos.x, santaPos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.w, this.h)
              pop()
              
      }
  }
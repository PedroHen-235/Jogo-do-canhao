class  Bola{
  constructor(x,y){
    var bolaoptions={
        isStatic:true,
    }  
    this.raio=30
    this.body=Bodies.circle(x,y,this.raio,bolaoptions)
    this.image=loadImage("assets/Boladecanhao.png")
    World.add(world,this.body)
}
   display(){
    var pos=this.body.position
    push()
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.raio,this.raio)
    pop()
   }
   shoot(){
       Matter.Body.setStatic(this.body,false)
       var newangle= cannon.angle-28
       newangle=newangle*(3.14/180)
       var velocidade= p5.Vector.fromAngle(newangle)
       velocidade.mult(0.5)
       Matter.Body.setVelocity(this.body,{
           x:velocidade.x*(180/3.14),
           y:velocidade.y*(180/3.14),
       })
   }
}











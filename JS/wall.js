class wall extends entity{
    constructor(layer,x,y,type,width,height){
        super(layer,x,y)
        this.type=type
        this.width=width
        this.height=height
        this.fade=1
        this.collideInfo={x:0,y:0}
        this.collide=[entities.players]
    }
    display(){
        this.layer.translate(this.position.x,this.position.y)
        this.layer.noStroke()
        switch(this.type){
            case 1:
                this.layer.fill(200,this.fade)
                this.layer.rect(0,0,this.width,this.height)
            break
        }
        this.layer.translate(-this.position.x,-this.position.y)
    }
    update(){
        for(e=0,le=this.collide.length;e<le;e++){
            for(f=0,lf=this.collide[e].length;f<lf;f++){
                if(boxInsideBox(this,this.collide[e][f])){
                    if(boxCollideBox(this,this.collide[e][f])==0){
                        this.collide[e][f].position.y=this.position.y+this.height/2+this.collide[e][f].height/2
                        this.collide[e][f].velocity.y=0
                    }
                    else if(boxCollideBox(this,this.collide[e][f])==1){
                        this.collide[e][f].position.y=this.position.y-this.height/2-this.collide[e][f].height/2
                        this.collide[e][f].velocity.y=0
                        this.collide[e][f].velocity.x*=physics.friction
                    }
                    else if(boxCollideBox(this,this.collide[e][f])==2){
                        this.collide[e][f].position.x=this.position.x+this.width/2+this.collide[e][f].width/2
                        this.collide[e][f].velocity.x=0
                        this.collide[e][f].velocity.y*=physics.friction
                    }
                    else if(boxCollideBox(this,this.collide[e][f])==3){
                        this.collide[e][f].position.x=this.position.x-this.width/2-this.collide[e][f].width/2
                        this.collide[e][f].velocity.x=0
                        this.collide[e][f].velocity.y*=physics.friction
                    }
                }
            }
        }
    }
}
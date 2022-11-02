class entity{
    constructor(layer,x,y){
        this.layer=layer
        this.position={x:x,y:y}
        this.time={main:0}
    }
    update(){
        this.time.main++
    }
}
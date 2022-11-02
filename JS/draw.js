function draw(){
    switch(stage.scene){
        case 'level':
            graphics.main.background(100)
            graphics.main.push()
            graphics.main.translate(-stage.focus.x,-stage.focus.y)
            graphics.main.scale(stage.focus.size)
            graphics.main.translate(graphics.main.width/2,graphics.main.height/2)
            for(a=0,la=run.fore.length;a<la;a++){
                for(b=0,lb=run.fore[a].length;b<lb;b++){
                    run.fore[a][b].display()
                    run.fore[a][b].update()
                    if(run.fore[a][b].remove){
                        run.fore[a].splice(b,1)
                    }
                }
            }
            graphics.main.translate(-graphics.main.width/2,-graphics.main.height/2)
            graphics.main.scale(1/stage.focus.size)
            graphics.main.translate(stage.focus.x,stage.focus.y)
            graphics.main.pop()
        break
    }
    stage.scale=min(width/graphics.main.width,height/graphics.main.height)
    updateMouse(graphics.main)
    image(graphics.main,width/2-stage.scale*graphics.main.width/2,height/2-stage.scale*graphics.main.height/2,stage.scale*graphics.main.width,stage.scale*graphics.main.height)
}
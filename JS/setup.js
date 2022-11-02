function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    graphics.main=createGraphics(800,600)
    setupLayer(graphics.main)
    generateLevel(graphics.main,levels[stage.level])
    run={fore:[entities.players,entities.walls]}
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}
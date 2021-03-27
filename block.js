class Block {
    constructor(x, y, width, height){
        var options = {
            restitution: 0.8,
            friction:0.2,
            density: 1
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        World.add(world, this.body)

        this.width = width
        this.height = height
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height)    
    }
}
export default class Leaf extends require('./segment').default{
    constructor(plant, source, props) {
        super(plant, source, props);
        this.type="leaf";
        this.plant.counts.leaf++;
        this.tip = this.pos.copy(
            Math.floor(this.plant.leafLength*Math.sin(Math.toRad(this.dir))),
            -Math.floor(this.plant.leafLength*Math.cos(Math.toRad(this.dir)))
        )
        this.edge1 = this.pos.copy(
            Math.floor((this.plant.leafLength/this.plant.leafSharpness)*Math.sin(Math.toRad(this.dir+this.plant.leafWidth))),
            -Math.floor((this.plant.leafLength/this.plant.leafSharpness)*Math.cos(Math.toRad(this.dir+this.plant.leafWidth)))
        )
        this.edge2 = this.pos.copy(
            Math.floor((this.plant.leafLength/this.plant.leafSharpness)*Math.sin(Math.toRad(this.dir-this.plant.leafWidth))),
            -Math.floor((this.plant.leafLength/this.plant.leafSharpness)*Math.cos(Math.toRad(this.dir-this.plant.leafWidth)))
        )
    }
    destroy(){
        super.destroy();
        //do some fall to earth animation?
    }
    grow(){
        //do some photosynthesis!
    }
    render(ctx){
        super.render(ctx);
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.quadraticCurveTo(this.edge1.x, this.edge1.y, this.tip.x, this.tip.y);
        ctx.quadraticCurveTo(this.edge2.x, this.edge2.y, this.pos.x, this.pos.y);
        ctx.stroke();
    }
}
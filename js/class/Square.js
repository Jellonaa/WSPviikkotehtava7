import { Rectangle } from "./Rectangle.js"

export class Square extends Rectangle {
    constructor(x,y,width) {
        super(x,y,width,width)
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x,this._y,this._width,this._height)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._colour
        ctx.stroke()
    }
}
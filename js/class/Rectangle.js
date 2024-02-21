import { Shape } from "./Shape.js";

export class Rectangle extends Shape {
    _width
    _height

    constructor(x,y,width,heigth) {
        super(x,y)
        this._width = width
        this._height = heigth
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.rect(this._x,this._y,this._width,this._height)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._colour
        ctx.stroke()
    }
}
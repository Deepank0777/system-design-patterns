import {IShape} from "./IShape"

export class Circle implements IShape{
    public draw(): void {
        console.log("drawing Circle")
    }
}
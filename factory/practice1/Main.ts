import { IShape } from "./IShape";
import { ShapeFactory } from "./ShapeFactory";

class Main{
    public static run():void{
        const shape_factory:ShapeFactory = new ShapeFactory('CIRCLE');
        const shape:IShape = shape_factory.getShape();
        shape.draw()
    }
}
Main.run();
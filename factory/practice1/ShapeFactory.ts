import { Circle } from "./Circle"
import { IShape } from "./IShape";
import { Rectangle } from "./Rectangle"
export class ShapeFactory {
    private shape: string
    constructor(shape: string) {
        this.shape = shape;
    }

    public getShape(): IShape {
        switch (this.shape) {
            case ('CIRCLE'): {
                return new Circle();
            }
            case ('RECTANGLE'): {
                return new Rectangle();
            }
            default: {
                return null;
            }
        }
    }
}
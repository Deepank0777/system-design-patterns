import { Animal } from "./Animal";
import { CanFly, CanNotFly } from "./Solution"

export class Bird extends Animal{
    constructor(){
        super(new CanFly());
    }
}

export class Dog extends Animal{
    constructor(){
        super(new CanNotFly());
    }
}

export class Lion extends Animal{
    constructor(){
        super(new CanNotFly())
    }
}


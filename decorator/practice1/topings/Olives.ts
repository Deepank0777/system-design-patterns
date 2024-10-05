import { APizza } from "../APizza";
import { ATopings } from "./ATopings";

export class Olives extends ATopings{
    private olives_price: number = 1
    private base_pizza: APizza
    constructor(base_pizza:APizza){
        super();
        this.base_pizza = base_pizza
    }
    public price(): number {
        return this.base_pizza.price() + this.olives_price
    }
}
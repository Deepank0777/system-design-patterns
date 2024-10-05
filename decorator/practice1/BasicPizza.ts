import { APizza } from "./APizza";

export class BasicPizza extends APizza{
    private basic_price: number = 10;

    public price(): number {
        return this.basic_price; 
    }
}
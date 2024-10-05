import { APizza } from "./APizza";

export class FarmHousePizza extends APizza{
    private basic_price: number = 12;

    public price(): number {
        return this.basic_price; 
    }
}
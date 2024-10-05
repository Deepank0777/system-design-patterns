import { Vehical } from "./vehical";
import { SportsPower } from "./strategy_pattern/power_sports"

export class SuperVehical extends Vehical{
    constructor(){
        super(new SportsPower());
    }
}
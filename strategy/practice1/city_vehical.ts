import { Vehical } from "./vehical";
import { CityPower } from "./strategy_pattern/power_city"

export class CityVehical extends Vehical{
    constructor(){
        super(new CityPower())
    }
}
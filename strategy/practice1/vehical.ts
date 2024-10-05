import { VehicalPower } from "./strategy_pattern/power_type"

export class Vehical{
    vehical_power:VehicalPower;

    constructor(vehical_power: VehicalPower){
        this.vehical_power = vehical_power;
    }

    public drive():string{
        return this.vehical_power.drive();
    }

}
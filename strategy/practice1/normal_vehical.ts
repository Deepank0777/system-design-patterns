import { Vehical } from './vehical';
import { NormalPower } from './strategy_pattern/power_normal'

export class NormalVehical extends Vehical{
    constructor(){
        super(new NormalPower());
    }
}
import { Vehical } from "./vehical";
import { SuperVehical } from "./super_vehical";
import { CityVehical } from "./city_vehical";
import { NormalVehical } from "./normal_vehical";


class Main{
    public vehical: Vehical

    run():string{
        this.vehical = new SuperVehical()
        return this.vehical.drive();
    }

}

const result = new Main().run()
console.log(result);
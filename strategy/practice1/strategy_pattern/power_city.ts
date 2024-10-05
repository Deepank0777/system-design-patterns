import { VehicalPower } from "./power_type";

export class CityPower implements VehicalPower{
    drive(): string {
        console.log('inside city power drive()')
        return 'city mode activate'
    }
}
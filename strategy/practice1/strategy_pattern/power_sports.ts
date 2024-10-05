import { VehicalPower } from "./power_type";

export class SportsPower implements VehicalPower{
    drive(): string {
        console.log('inside sports power drive()')
        return 'sports mode activate'
    }
}
import { VehicalPower } from "./power_type";

export class NormalPower implements VehicalPower{
    drive(): string {
        console.log('inside normal power drive()')
        return 'eco mode activate'
    }
}
import { CheckFly } from "./Solution"

export class Animal implements CheckFly{
    private checkFly:CheckFly
    
    constructor(checkFly:CheckFly){
        this.checkFly = checkFly
    }

    fly():string{
        return this.checkFly.fly()
    }
}
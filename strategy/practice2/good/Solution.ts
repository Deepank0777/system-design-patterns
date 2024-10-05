export interface CheckFly{
    fly():string;
}

export class CanFly implements CheckFly{
    fly():string{
        return "can fly";
    }
}

export class CanNotFly implements CheckFly{
    fly():string{
        return "can't fly"
    }
}


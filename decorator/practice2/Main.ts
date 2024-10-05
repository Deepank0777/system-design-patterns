interface IDecorator{
    getPrice():number;
}

class Base implements IDecorator{
    price:number = 100;
    
    getPrice():number{
        return this.price;
    }
}

class Decorator1 implements IDecorator{
    baseClass:IDecorator;
    price:number = 10

    constructor(base:IDecorator){
        this.baseClass = base
    }

    getPrice(): number {
        return this.baseClass.getPrice() + this.price;
    }
    
}

class Decorator2 implements IDecorator{
    baseClass:IDecorator;
    price:number = 5

    constructor(base:IDecorator){
        this.baseClass = base
    }

    getPrice(): number {
        return this.baseClass.getPrice() + this.price;
    }
    
}


const price = new Decorator2(new Decorator1(new Base())).getPrice();
console.log(price)
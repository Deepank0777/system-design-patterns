import { Bird } from "./bird";
import { Dog } from "./dog";
import { Lion } from "./lion";

class Main{
    public static testBird():string{
        const bird = new Bird()
        return bird.fly();
    }
   
    public static testDog():string{
        const dog = new Dog()
        return dog.fly();
    }

    public static testLion():string{
        const lion = new Lion();
        return lion.fly()
    }
}

const birdCanFly = Main.testBird()
console.log('testing Bird',birdCanFly);

const dogCanFly = Main.testDog()
console.log('testing Dog',dogCanFly);

const lionCanFly = Main.testLion()
console.log('testing Lion',lionCanFly);
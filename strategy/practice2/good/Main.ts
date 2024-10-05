import { Animal } from './Animal';
import {Bird, Dog, Lion} from './Animals';


class Main{
    public static runBird(){
        const bird:Animal = new Bird();
        console.log('Bird',bird.fly())
    }
    
    public static runLion(){
        const lion:Animal = new Lion();
        console.log('Lion',lion.fly())
    }

    public static runDog(){
        const dog:Animal = new Dog();
        console.log('Dog',dog.fly())
    }
}

Main.runBird();
Main.runDog();
Main.runLion();


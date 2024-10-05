import { IActivity } from "./IActivity";
import { INotificationObserver } from "../observer/INotificationObserver"

export class PhoneObservable implements IActivity{
    
    private phone_stock:number = 0
    private phone_observer: INotificationObserver[] = []

    constructor(){
        this.phone_observer
    }
    add(observer: INotificationObserver):void{
        this.phone_observer.push(observer)
    }
    remove(): void {
        
    }
    notify(): void {
        if(this.phone_stock === 0){
            //call observer
            for(const obs of this.phone_observer){
                obs.sendNotification();
            }
        }
    }
    setData(digit :number): void {
        this.phone_stock++;
    }
    getData(): number {
        return this.phone_stock;
    }
}
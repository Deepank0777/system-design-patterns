import {INotificationObserver} from "../observer/INotificationObserver"
export interface IActivity{
    add(observer:INotificationObserver):void;
    remove():void;
    notify():void;
    setData(num: number):void;
    getData():number;
}
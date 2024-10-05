import { PhoneObservable } from "./observable/PhoneObservable";
import { IActivity } from "./observable/IActivity";
import  { PhoneNotification } from "./observer/PhoneNotification"
import  { EmailNotification } from "./observer/EmailNotification"
import  { INotificationObserver } from "./observer/INotificationObserver"



const observer1:INotificationObserver = new PhoneNotification();
const observer2:INotificationObserver = new EmailNotification();

const phone_observable:IActivity = new PhoneObservable();
phone_observable.add(observer1)
phone_observable.add(observer2)

phone_observable.notify();
// phone_observable.notify();



import { INotificationObserver } from "./INotificationObserver";

export class PhoneNotification implements INotificationObserver{
    sendNotification(): void {
        console.log('notification sent on mobile')
    }
}   
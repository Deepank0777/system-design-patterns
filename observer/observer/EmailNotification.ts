import { INotificationObserver } from "./INotificationObserver";

export class EmailNotification implements INotificationObserver{
    sendNotification(): void {
        console.log('notification sent on Email')
    }
}   
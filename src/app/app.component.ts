import { Component } from '@angular/core';
import { PushNotifications } from '@capacitor/push-notifications'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    PushNotifications.addListener('registration', token => console.log(token))
    PushNotifications.addListener('pushNotificationReceived', obj => console.log(obj))
  }
}

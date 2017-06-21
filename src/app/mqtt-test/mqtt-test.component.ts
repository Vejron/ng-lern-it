import { Component, OnInit } from '@angular/core';
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-mqtt-test',
  templateUrl: './mqtt-test.component.html',
  styleUrls: ['./mqtt-test.component.scss']
})
export class MqttTestComponent implements OnInit {
  message = 'not';

  constructor(private _mqttService: MqttService) { }

  ngOnInit() {
    this._mqttService.connect();
    this._mqttService.onConnect.subscribe((e) => {
      console.log('onConnect', e);
    });
    this._mqttService.onError.subscribe((e) => {
      console.log('onError', e);
    });
    this._mqttService.onClose.subscribe(() => {
      console.log('onClose');
    });
    this._mqttService.onReconnect.subscribe(() => {
      console.log('onReconnect');
    });
    this._mqttService.onMessage.subscribe((e) => {
      console.log('onMessage', e);
    });

    this._mqttService.observe('xvi11/tt').subscribe((message: MqttMessage) => {
      this.message = message.payload.toString();
    });
  }

  public onClick(msg: string) {
    //this.message = msg;
    this.publish('xvi11/tt', msg)
  }

  public publish(topic: string, message: string) {
    this._mqttService.publish(topic, message, { qos: 0 }).subscribe((err) => {
      console.log(err);
    });
  }

}

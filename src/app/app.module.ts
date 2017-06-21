import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChallengeGeneratorComponent } from './challenge-generator/challenge-generator.component';
import { ChallengeViewComponent } from './challenge-view/challenge-view.component';
import { ChallengeMultiInputComponent } from './challenge-multi-input/challenge-multi-input.component';

// app wide services
import { ChallengeSettingsService } from './shared/challenge-settings.service';
import { ChallengeSettingsComponent } from './challenge-settings/challenge-settings.component';
import { RandomService } from './shared/random.service';
import { RatingContainerComponent } from './rating-container/rating-container.component';
import { NavComponent } from './nav/nav.component';

// mqtt
import { MqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { MqttTestComponent } from './mqtt-test/mqtt-test.component';

export const MQTT_SERVICE_OPTIONS = {
  hostname: 'iot.eclipse.org',
  port: 80,
  path: '/ws'
};

export function mqttServiceFactory() {
  return new MqttService(MQTT_SERVICE_OPTIONS);
}

@NgModule({
  declarations: [
    AppComponent,
    ChallengeGeneratorComponent,
    ChallengeViewComponent,
    ChallengeMultiInputComponent,
    ChallengeSettingsComponent,
    RatingContainerComponent,
    NavComponent,
    MqttTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: mqttServiceFactory
    })
  ],
  providers: [ChallengeSettingsService, RandomService],
  bootstrap: [AppComponent]
})
export class AppModule { }

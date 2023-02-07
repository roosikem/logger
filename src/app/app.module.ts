import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoggerModule, LoggerService } from 'logger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    ,
    LoggerModule.forRoot(environment.logPublisherConfig)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';
import { LoggerService, LogPublisherConfig } from 'logger';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-library';

  config: LogPublisherConfig = {
      loggerName: "api",
      loggerLocation: "http://localhost:8080/log",
      isActive: false
  }

  constructor(private ngLog : LoggerService) {
    this.ngLog.applyApiLogConfig(this.config, this.httpOptions);
   }

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'manish',
      Authorization: 'my-auth-token'
    })
  };
  ngOnInit() {

   this.ngLog.debug("debug message");
   this.ngLog.error("error message");
   console.log( this.ngLog.publishers);

  }
}

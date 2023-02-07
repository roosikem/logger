import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { LogPublisherConfigService } from './log-publisher-config.service';
import { LogPublisherConfig } from '../models/log-publisher-config';
import { LogPublisher } from '../classes/log-publisher';

import { LogLocalStorage } from '../classes/log-local-storage';
import { LogConsole } from '../classes/log-console';
import { LogApi } from '../classes/log-api';

@Injectable({
  providedIn: 'root',
})
export class LogPublisherService {
  constructor(
    private http: HttpClient,
    @Inject(LogPublisherConfigService) private config
  ) {
    this.buildPublishers();
  }

  publishers: LogPublisher[] = [];

  getLoggers(): Observable<LogPublisherConfig[]> {
    return of(this.config);
  }

  buildPublishers(): void {
    let logPub: LogPublisher;

    this.getLoggers().subscribe((response) => {
      for (let pub of response.filter((p) => p.isActive)) {
        switch (pub.loggerName.toLowerCase()) {
          case 'console':
            logPub = new LogConsole();
            break;
          case 'localstorage':
            logPub = new LogLocalStorage();
            break;
          case 'api':
            logPub = new LogApi(this.http, pub.options);
            break;
        }
        logPub.location = pub.loggerLocation;
        this.publishers.push(logPub);
      }
    });
  }

  applyApiLogConfig(config : LogPublisherConfig, httpOptions : {}){
    let index = this.publishers.findIndex(x => x instanceof LogApi );
    if(index > -1){
      if(config.isActive){
        const apiLog  = <LogApi>this.publishers[index];
        apiLog.location = config.loggerLocation;
        apiLog.setOption(httpOptions);
        this.publishers[index] = apiLog;
      }else{
        this.publishers.splice(index, 1);
      }

    }
    return this.publishers;
  }

}

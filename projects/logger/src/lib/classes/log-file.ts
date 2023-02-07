import { Observable, of } from 'rxjs';

import { LogPublisher } from './log-publisher';
import { LogEntry } from './log-entry';

export class LogFile extends LogPublisher {
  constructor() {
    super(new LogEntry());
    this.location = 'logging';
  }

  log(entry: LogEntry): Observable<boolean> {
    let ret: boolean = false;

    try {
      console.log(entry.buildLogString());
      ret = true;
    } catch (ex) {
      console.log(ex);
    }

    return of(ret);
  }

  clear(): Observable<boolean> {
    console.clear();
    return of(true);
  }
}

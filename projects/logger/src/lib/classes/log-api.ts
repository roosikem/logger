import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LogPublisher } from './log-publisher';
import { LogEntry } from './log-entry';
import { HttpClient } from '@angular/common/http';

export class LogApi extends LogPublisher {
  constructor(private http: HttpClient, private httpOptions: any) {
    super(new LogEntry());
  }

  log(entry: LogEntry): Observable<boolean> {
    let ret: boolean = false;

    try {
      console.log('API LOg ' + this.location);
      console.log('API LOg ' + JSON.stringify(this.httpOptions));
      return this.http.post(this.location, entry.buildLogString(), this.httpOptions).pipe(
        map((response) => response),
        catchError(this.handleErrors)
      );

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
  private handleErrors(error: any): Observable<any> {
    let errors: string[] = [];
    let msg: string = '';

    msg = 'Status: ' + error.status;
    msg += ' - Status Text: ' + error.statusText;
    if (error.json()) {
      msg += ' - Exception Message: ' + error.json().exceptionMessage;
    }
    errors.push(msg);
    console.error('An error occurred', errors);
    return Observable.throw(errors);
  }

  setOption(httpOption : {}){
    this.httpOptions = httpOption;
  }
}

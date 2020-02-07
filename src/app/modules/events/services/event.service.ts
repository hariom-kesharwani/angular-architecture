import { Injectable } from '@angular/core';
import { Observable, of , throwError} from 'rxjs';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {
    
  }

  /**
   * This Service used to call an api
   * @param params This data will api call
  */
  getEventsList(params): Observable<any> {
    return this.http.post<any>(environment.apiUrl+'/GetSectorByPropertyID',params,environment.httpOptions).pipe(
      catchError(this.handleError)
    )
  }

  /**
   * Global function to handle all error 
   * @param error 
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}


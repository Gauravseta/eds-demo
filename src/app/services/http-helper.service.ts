import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpHelperService {


    constructor(private http: HttpClient){ }


    /**
     * Performs a get http request
     * @param url the url
     */
    get(url: string): Observable<any> {
        return this.http.get(url);
    }
}
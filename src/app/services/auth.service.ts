import { Injectable } from '@angular/core';
import { AppConstants } from '../app.constants';
import { UtilService } from './util.service';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/observable/of';
@Injectable()
export class AuthService {
    
    constructor(private util: UtilService) { }

    /**
     * isAuthenticated check if user is loggged in
     */
     isAuthenticated() {
         return !_.isNil(this.util.getFromStorage(AppConstants.LOGGED_IN_USER_ACCESS_TOKEN))
    }

     login(email: string, password: string): Observable<any> {
        this.util.saveToStorage(AppConstants.LOGGED_IN_USER_ACCESS_TOKEN, 'this will be token');
        return Observable.of('this wont be string but body recieved from http response');
     }
}
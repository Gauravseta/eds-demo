import { Injectable, Inject } from '@angular/core';
import { AppConstants } from '../app.constants';
import {HttpHelperService} from './http-helper.service';
import {Observable} from 'rxjs/Observable';
import Members from '../model/members';

@Injectable()
export class MemberService {

    constructor(private http: HttpHelperService) {

    }

    /** 
     * Gets all members.
     * 
    */
    getAllMembers() {
        //return this.http.get('data/members.json'); //Can use url to hit backend api
        return Observable.of(Members);
    }
}
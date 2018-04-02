import {Injectable} from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import { UtilService } from '../services/util.service';

@Injectable()
export class SearchTextResolver implements Resolve<any> {

    constructor(private util: UtilService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        let resolveObj = this.util.getFromStorage('SEARCH_TEXT') || '';
        return Observable.of(resolveObj.substring(1,resolveObj.length-1));
    }
    
}
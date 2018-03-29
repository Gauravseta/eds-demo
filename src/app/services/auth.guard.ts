import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
@Injectable()
export class AuthGuard implements CanActivate {

        constructor(private router: Router, private auth: AuthService) {

        }

        /**
        * checks if user can access the route
        */
        canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
            if(!this.auth.isAuthenticated()){
                this.router.navigate(['/login']);
                return Observable.of(false);
            }

            return Observable.of(true);
        }
}
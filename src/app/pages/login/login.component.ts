import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UtilService} from '../../services/util.service';
import {Router} from '@angular/router';
@Component({
    selector : 'app-login',
    templateUrl: './login.component.html',
    styles: []
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService, private util: UtilService, private router: Router) { }
    ngOnInit() {
        if(this.auth.isAuthenticated()) {
            this.router.navigate(['/members']);
        }
    }

    login() {
        console.log('login button clicked');
        this.auth.login('admin','admin').subscribe(data => {
           if(data){
            this.router.navigate(['/members']);
           }
        });
    }
}
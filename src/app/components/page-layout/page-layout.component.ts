import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { AppConstants } from '../../app.constants';
/**
 * Main page layout, display the page side nav and top nav
 */

@Component({
    selector: 'page-layout',
    templateUrl: './page-layout.component.html',
})
export class PageLayoutComponent implements OnInit {

    constructor(private util: UtilService, private router: Router){}
    ngOnInit() {

    }

    /**
  * logout Log user out
  */
  logout() {
    this.util.removeFromStorage(AppConstants.LOGGED_IN_USER_ACCESS_TOKEN);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { CommonService } from '../../services/common.service';
import { AppConstants } from '../../app.constants';
/**
 * Main page layout, display the page side nav and top nav
 */

@Component({
    selector: 'page-layout',
    templateUrl: './page-layout.component.html',
    styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
   private memberName: string = '';
    constructor(private util: UtilService, private router: Router, private commonService: CommonService){}
    ngOnInit() {
      let resolveObj: string= this.util.getFromStorage('SEARCH_TEXT') || '';
     
      this.memberName = resolveObj.substring(1,resolveObj.length-1);
      this.commonService.notifyOther({memberName: this.memberName});
    }

    /**
  * logout Log user out
  */
  logout() {
    this.util.removeFromStorage(AppConstants.LOGGED_IN_USER_ACCESS_TOKEN);
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  changeMember() {
    this.util.saveToStorage('SEARCH_TEXT',this.memberName);
    this.commonService.notifyOther({memberName: this.memberName});
  }

}
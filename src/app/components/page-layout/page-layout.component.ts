import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { CommonService } from '../../services/common.service';
import {MemberService} from '../../services/member.service';
import { AppConstants } from '../../app.constants';
import {FormControl} from '@angular/forms';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {Observable} from 'rxjs/Observable';
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
   myControl: FormControl = new FormControl();
   private membersNameList: any;
   private filteredOptions: Observable<string[]>;
    constructor(private util: UtilService, private router: Router, private commonService: CommonService, private memberService: MemberService){}
    ngOnInit() {
      let resolveObj: string= this.util.getFromStorage('SEARCH_TEXT') || '';
     
      this.memberName = resolveObj.substring(1,resolveObj.length-1);
      this.commonService.notifyOther({memberName: this.memberName});
      this.memberService.getAllMembers().subscribe((res) => {
        this.membersNameList = res.members.map((d) => {
          return d.name;
        });
      });

      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
    }

    filter(val: string): string[] {
      return this.membersNameList.filter(option =>
        option.indexOf(val) === 0);
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
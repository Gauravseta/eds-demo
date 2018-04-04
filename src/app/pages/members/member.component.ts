import { Component, OnInit} from '@angular/core';
import {CommonService} from '../../services/common.service';
import {MemberService} from '../../services/member.service';
import { Subscription } from 'rxjs/Subscription';
import {Router, CanActivate, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
@Component({
    selector : 'members',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {
     subscription: Subscription;
     memberName: string;
     members: any;
     filteredMembers: any;
    constructor(private commonService: CommonService,route: ActivatedRoute,private memberService: MemberService) {
    
    }
    ngOnInit() {
        this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
            this.memberName = res.memberName;
            this.filterMembers(this.memberName);
        });

        this.memberService.getAllMembers().subscribe((res) => {
            console.log(res);
            this.members = res.members;
            this.filterMembers('');
        });
    }

    filterMembers(memberName: string) {
        if(memberName == ''){
            this.filteredMembers = this.members;
            return;
        }
        this.filteredMembers = this.members.filter((d) => {
            return d.name.indexOf(memberName) != -1
        });
    }
}
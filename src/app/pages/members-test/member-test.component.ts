import { Component, OnInit} from '@angular/core';
import {CommonService} from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
import {MemberService} from '../../services/member.service';


@Component({
    selector : 'members-test',
    templateUrl: './member-test.component.html'
})

export class MemberTestComponent implements OnInit {
    private subscription: Subscription;
    private memberName: string;
    private members: any;
    private memberExist: boolean = false;
    private member: any;
    constructor(private commonService: CommonService,private memberService: MemberService) {}

    ngOnInit() {
        this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
            this.memberName = res.memberName;
            console.log(this.memberName);
            this.showExamHistory(this.memberName);
        });

        this.memberService.getAllMembers().subscribe((res) => {
            console.log(res);
            this.members = res.members;
        });
    }

    showExamHistory(memberName: string){
        let member = this.members.filter((d) => {
            return d.name == memberName;
        });
        if(member.length > 0) {
            this.memberExist = true;
            this.member = member[0];
        } else {
            this.memberExist = false;
        }
    }
}
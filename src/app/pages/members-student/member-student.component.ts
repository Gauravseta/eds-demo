import { Component, OnInit} from '@angular/core';
import {CommonService} from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
import {MemberService} from '../../services/member.service';



@Component({
    selector : 'members-student',
    templateUrl: './member-student.component.html'
})

export class MemberStudentComponent implements OnInit {
    private subscription: Subscription;
    private members: any;
    private memberName: string;
    private memberExist: boolean = false;
    private member: any;

    constructor(private commonService: CommonService,private memberService: MemberService){ }

    ngOnInit() {
        this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
            this.memberName = res.memberName;
            this.showMemberDetails(this.memberName);
        });

        this.memberService.getAllMembers().subscribe((res) => {
            this.members = res.members;
        });
    }

    showMemberDetails(memberName: string) {
        let member = this.members.filter((d) => {
            return d.name == memberName;
        });
        if(member.length> 0){
            this.memberExist = true;
            this.member = member[0];
        } else {
            this.memberExist = false;
        }
    }
}
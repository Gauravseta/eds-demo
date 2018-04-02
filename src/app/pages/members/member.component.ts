import { Component, OnInit} from '@angular/core';
import {CommonService} from '../../services/common.service';
import { Subscription } from 'rxjs/Subscription';
import {Router, CanActivate, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
@Component({
    selector : 'members',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {
    private subscription: Subscription;
    private memberName: string;
    constructor(private commonService: CommonService,route: ActivatedRoute) {
    }
    ngOnInit() {
        this.subscription = this.commonService.notifyObservable$.subscribe((res) => {
            this.memberName = res.memberName;
        });
    }
}
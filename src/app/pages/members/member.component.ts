import { Component, OnInit} from '@angular/core';



@Component({
    selector : 'members',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.scss']
})

export class MemberComponent implements OnInit {

    ngOnInit() {
        console.log('in members component');
    }
}
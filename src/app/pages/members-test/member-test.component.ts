import { Component, OnInit} from '@angular/core';



@Component({
    selector : 'members-test',
    templateUrl: './member-test.component.html'
})

export class MemberTestComponent implements OnInit {

    ngOnInit() {
        console.log('in members test component');
    }
}
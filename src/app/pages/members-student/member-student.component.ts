import { Component, OnInit} from '@angular/core';



@Component({
    selector : 'members-student',
    templateUrl: './member-student.component.html'
})

export class MemberStudentComponent implements OnInit {

    ngOnInit() {
        console.log('in members student component');
    }
}
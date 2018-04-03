import { NgModule } from '@angular/core';

import { UtilService } from './util.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CommonService } from './common.service'; 
import { MemberService } from './member.service';
import { HttpHelperService } from './http-helper.service';
@NgModule({
    providers: [
        UtilService,
        AuthService,
        CommonService,
        MemberService,
        HttpHelperService
    ],
    imports: [
    ]
})
export class ServicesModule { }

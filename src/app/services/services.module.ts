import { NgModule } from '@angular/core';

import { UtilService } from './util.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CommonService } from './common.service'; 

@NgModule({
    providers: [
        UtilService,
        AuthService,
        CommonService
    ],
    imports: [
    ]
})
export class ServicesModule { }

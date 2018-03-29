import { NgModule } from '@angular/core';

import { UtilService } from './util.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';



@NgModule({
    providers: [
        UtilService,
        ServicesModule,
        AuthService,
    ],
    imports: [
    ]
})
export class ServicesModule { }

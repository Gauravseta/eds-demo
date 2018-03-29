import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { MemberComponent } from './pages/members/member.component';
import {MemberStudentComponent} from  './pages/members-student/member-student.component';
import {MemberTestComponent} from  './pages/members-test/member-test.component';

import { ServicesModule } from './services/services.module';
import { AuthGuard } from './services/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageLayoutComponent,
    MemberComponent,
    MemberStudentComponent,
    MemberTestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ServicesModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

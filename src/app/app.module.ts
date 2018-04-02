import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material/demo.material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';
import { MemberComponent } from './pages/members/member.component';
import {MemberStudentComponent} from  './pages/members-student/member-student.component';
import {MemberTestComponent} from  './pages/members-test/member-test.component';

import { ServicesModule } from './services/services.module';
import { AuthGuard } from './services/auth.guard';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';

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
    BrowserAnimationsModule,
    FormsModule,
    ServicesModule,
    HttpClientModule,
    DemoMaterialModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

import {LoginComponent} from  './pages/login/login.component';
import {MemberComponent} from  './pages/members/member.component';
import {MemberStudentComponent} from  './pages/members-student/member-student.component';
import {MemberTestComponent} from  './pages/members-test/member-test.component';
import { PageLayoutComponent } from './components/page-layout/page-layout.component';

import {AuthGuard} from './services/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DemoMaterialModule } from './material/demo.material';

import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MemberComponent,
    MemberStudentComponent,
    MemberTestComponent,
    PageLayoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      //{ path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},
      {
        path:'login', component: LoginComponent
    },
    {
        path: 'members', component: MemberComponent,
        canActivate: [AuthGuard]
        /*resolve :{
            searchText: SearchTextResolver
        } */
    },
    {
        path: 'members/students', component: MemberStudentComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'members/tests', component: MemberTestComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '**', redirectTo: 'members'
    }
    ]),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,
    HttpClientModule,
    DemoMaterialModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

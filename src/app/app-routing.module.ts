import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from  './pages/login/login.component';
import {MemberComponent} from  './pages/members/member.component';
import {MemberStudentComponent} from  './pages/members-student/member-student.component';
import {MemberTestComponent} from  './pages/members-test/member-test.component';
import {AuthGuard} from './services/auth.guard';
import {SearchTextResolver} from './resolvers/searchtext.resolver';
const routes: Routes = [
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
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [SearchTextResolver]

})
export class AppRoutingModule{

}
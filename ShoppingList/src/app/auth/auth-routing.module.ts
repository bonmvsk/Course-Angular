import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const router: Routes = [
    { path: 'signin', component: SigninComponent},
    { path: 'signup', component: SignupComponent}
]
@NgModule({
    imports: [
        RouterModule.forChild(router)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {

}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostIndexComponent } from './component/post/post-index/post-index.component';
import { PostShowComponent } from './component/post/post-show/post-show.component';
import { PostCreateComponent } from './component/post/post-create/post-create.component';
import { SignUpComponent } from './component/authentication/sign-up/sign-up.component';
import { SignInComponent } from './component/authentication/sign-in/sign-in.component';
import { HomeComponent } from './component/user/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: 'post', pathMatch: 'full' },
    { path: 'post', component: PostIndexComponent },
    //{ path: 'post/:id', component: PostShowComponent },
    //{ path: 'post/create', component: PostCreateComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

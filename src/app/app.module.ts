import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './component/post/post-create/post-create.component';
import { PostShowComponent } from './component/post/post-show/post-show.component';
import { PostIndexComponent } from './component/post/post-index/post-index.component';
import { PostEditComponent } from './component/post/post-edit/post-edit.component';
import { SignInComponent } from './component/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './component/authentication/sign-up/sign-up.component';
import { HomeComponent } from './component/user/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        PostCreateComponent,
        PostShowComponent,
        PostIndexComponent,
        PostEditComponent,
        SignInComponent,
        SignUpComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

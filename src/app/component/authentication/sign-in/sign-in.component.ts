import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';

import { User } from 'src/app/model/user/user.model';
import { SignInService } from 'src/app/service/authentication/sign-in/sign-in.service';
import { TokenService } from 'src/app/service/authentication/token/token.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    signInStatus?: any;

    signInForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private service: SignInService, private route: ActivatedRoute, private router: Router, private tokenService: TokenService) { }

    ngOnInit(): void {
       if (this.tokenService.getEmail()) {
            this.router.navigate(['home'], { queryParams: { token: this.tokenService.getToken(), email: this.tokenService.getEmail() }}); 
       } 
    }

    access(): void {
        this.service.access(this.signInForm.value).subscribe({
            next: (n) => {
                if (n.resultant.id == "AUT") {
                    this.tokenService.setToken(n.data.token);
                    this.tokenService.setEmail(n.data.email);
                    this.router.navigate(['home'], { queryParams: { token: n.data.token, email: n.data.email }}).then(() => {
                        window.location.reload();
                    });
                } else {
                    this.signInStatus = n.resultant;
                }
            },
            error: (e) => {
                console.log(e);
            }
        });
    }

}

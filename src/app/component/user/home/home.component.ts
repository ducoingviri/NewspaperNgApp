import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { SignInService } from 'src/app/service/authentication/sign-in/sign-in.service';
import { TokenService } from 'src/app/service/authentication/token/token.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    isSignedIn: boolean = false;
    email?: string;
    token?: string;

    currentUser: any = {
        email: '',
        username: ''
    };

    constructor(private service: SignInService, private route: ActivatedRoute, private router: Router, private tokenService: TokenService) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            this.email = params['email'];
            this.token = params['token'];
        });
        this.service.review({ email: this.email, token: this.token }).subscribe({
            next: (n) => {
                if (n.resultant.id == "CON") {
                    //console.log('session token: ' + this.tokenService.getToken());
                    //console.log('session email: ' + this.tokenService.getEmail());
                    this.isSignedIn = true;
                } else {
                    this.isSignedIn = false;
                    this.tokenService.clear();
                    this.router.navigate(['sign-in']);
                }
                //console.log(this.isSignedIn);
            },
            error: (e) => {
                console.log(e);
            }
        });
    }

}

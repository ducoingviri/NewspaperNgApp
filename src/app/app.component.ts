import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { TokenService } from 'src/app/service/authentication/token/token.service';
import { SignInService } from 'src/app/service/authentication/sign-in/sign-in.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'NewspaperNgApp';
    isSignedIn: boolean = false;

    constructor (private tokenService: TokenService, private signInService: SignInService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        if (this.isSignedIn) {
            this.signInService.review({ email: this.tokenService.getEmail(), token: this.tokenService.getToken() }).subscribe({
                next: (n) => {
                    if (n.resultant.id == "CON") {
                        this.isSignedIn = true;
                    } else {
                        this.isSignedIn = false;
                        this.tokenService.clear();
                        this.router.navigate(['sign-in']);
                    }
                },
                error: (e) => {
                    console.log(e);
                }
            });
        } else {
            this.router.navigate(['post']);
        }
    }

    signOut(): void {
        this.isSignedIn = false;
        this.tokenService.clear();
        this.router.navigate(['post']);
    }

    signIn(): void {
        this.router.navigate(['sign-in']);
    }

    signUp(): void {
        this.router.navigate(['sign-up']);
    }

}

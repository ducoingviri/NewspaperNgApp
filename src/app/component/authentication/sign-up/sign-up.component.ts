import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DatePipe } from '@angular/common';

import { FormGroup, FormControl } from '@angular/forms';

import { User } from 'src/app/model/user/user.model';
import { SignUpService } from 'src/app/service/authentication/sign-up/sign-up.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css'],
    providers: [DatePipe]
})
export class SignUpComponent implements OnInit {

    signUpForm = new FormGroup({ 
        username: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(private service: SignUpService, private datePipe: DatePipe) { }

    ngOnInit(): void {
    }

    store(): void {
        let createdat = new Date();
        this.signUpForm.value.createdat = this.datePipe.transform(createdat, 'yyyy-MM-dd');
        this.service.store(this.signUpForm.value).subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (e) => console.error(e)
        });
    }

}

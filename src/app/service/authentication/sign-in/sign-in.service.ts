import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Api } from '../../../../enums/api';

import { User } from '../../../model/user/user.model';

const baseUrl = environment.baseUrl + Api.AUTHENTICATION;

@Injectable({
    providedIn: 'root'
})
export class SignInService {

    constructor(private http: HttpClient) { }

    access(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/access`, data);
    }

    review(data: any): Observable<any> {
        return this.http.post(`${baseUrl}/review`, data);
    }
}

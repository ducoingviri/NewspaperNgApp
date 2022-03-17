import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Api } from '../../../../enums/api';

import { User } from '../../../model/user/user.model';

const baseUrl = environment.baseUrl + Api.USER;

@Injectable({
    providedIn: 'root'
})
export class SignUpService {

    constructor(private http: HttpClient) { }

    store(data: any): Observable<User> {
        return this.http.post(`${baseUrl}`, data);
    } 

}

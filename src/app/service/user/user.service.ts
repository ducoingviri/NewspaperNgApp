import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Api } from '../../../enums/api';

import { User } from '../../model/user/user.model';

const baseUrl = environment.baseUrl + Api.USER;

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    show(id: any): Observable<User> {
        return this.http.get<User>(`${baseUrl}/${id}`);
    }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Api } from '../../../enums/api';

import { Post } from '../../model/post/post.model';

const baseUrl = environment.baseUrl + Api.POST;

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient) { }

    index(): Observable<Post[]> {
        return this.http.get<Post[]>(baseUrl);
    }

    show(id: any): Observable<Post> {
        return this.http.get<Post>(`${baseUrl}/${id}`);
    }

    update(id: any, data: any): Observable<Post> {
        return this.http.put<Post>(`${baseUrl}/${id}`, data);
    } 

    findByAuthor(author: any): Observable<Post[]> {
        return this.http.get<Post[]>(`${baseUrl}/find-by-author?value=${author}`);
    }

}

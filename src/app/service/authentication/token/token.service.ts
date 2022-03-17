import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor() { }

    clear(): void {
        window.sessionStorage.clear();
    }

    setToken(token: string): void {
        window.sessionStorage.removeItem("token");
        window.sessionStorage.setItem("token", token);
    }

    setEmail(email: string): void {
        window.sessionStorage.removeItem("email");
        window.sessionStorage.setItem("email", email);
    }

    getToken(): any {
        return window.sessionStorage.getItem("token");
    }

    getEmail(): any {
        return window.sessionStorage.getItem("email");
    }

}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  URL = "https://api-final-su.herokuapp.com";
  constructor(private http : HttpClient) { }

  login(user: string ){
    return this.http.post<any>(this.URL + '/login',user);
  }

  logout(){
    localStorage.removeItem('token');
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
}

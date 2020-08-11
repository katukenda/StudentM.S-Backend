import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authToken: any;
  user: any;

  private _registerUrl = "/users/register";
  private _loginUrl = "/users/authenticate";
  private _student_dashboard_url = "/users/student_dashboard";
  
  constructor(private http: HttpClient, private _router: Router) { }

  saveUser(data) {
    return new Promise((resolve, reject) => {
        this.http.post(this._registerUrl, data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

 

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  
  
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', user.role);
    localStorage.setItem('username', user.username);
    localStorage.setItem('subject', 'C');
    console.log("login"+localStorage.getItem('role'));
    console.log("login"+localStorage.getItem('username'));
    this.authToken = token;
    this.user = user;
  }

  logoutUser() {
    if (confirm('Are you sure logout?') == true) {
      localStorage.removeItem('user');
    localStorage.removeItem('id_token');  
    this._router.navigate(['/login']);
    }
  }

  
  
}

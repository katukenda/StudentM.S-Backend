import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayhereService {

  constructor(private http: HttpClient) { } 


  postrecord(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/pay', data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  getPaymentsBycourse(course) {
    return new Promise((resolve, reject) => {
      this.http.get('/pay/' + course)
        //.map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  } 

  getPaymentsByUsernameandcourse(username,course) {
    return new Promise((resolve, reject) => {
      this.http.get('/pay/' + username +'/'+course)
        //.map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  } 

  deletePaysForUnregister(username){
    return new Promise((resolve, reject) => {
     this.http.delete('/pay/unregister/' + username)
       //.map(res => res.json())
       .subscribe(res => {
         resolve(res);
       }, (err) => {
         reject(err);
       });
   });
  } 

}

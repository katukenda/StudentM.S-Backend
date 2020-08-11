import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


import { Attendance } from '../shared/attendance.model';
import { Course } from '../shared/course.model';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  selectedAttendance: Attendance;
  attendances: Attendance[];

  selectedCourses: Course;
  courses: Course[];
  
  readonly baseURL = '/attendance_management'; //backend 

  constructor(private http : HttpClient) { }

  saveAttendance(data) {
    return new Promise((resolve, reject) => {
        this.http.post(this.baseURL, data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  

  getStudentAttendanceByusername(username) {
    console.log("getStudentAttendanceByusername"+username);
    return this.http.get(this.baseURL + '/username/' + username); 
  }


  getStudentAttendanceBycoursename(course) {
    return this.http.get(this.baseURL + '/' + course); 
  }

  getStudentListBycoursename(course) {
    return this.http.get(this.baseURL + '/' + course); 
  }

  getattendanceall() {
    return this.http.get(this.baseURL + '/all'); 
  }

  deleteAttendanceForUnregister(username){
    return new Promise((resolve, reject) => {
     this.http.delete('/attendance_management/unregister/' + username)
       //.map(res => res.json())
       .subscribe(res => {
         resolve(res);
       }, (err) => {
         reject(err);
       });
   });
 } 

 deleteAttendanceForUnenrol(username, course){
  return new Promise((resolve, reject) => {
   this.http.delete('/attendance_management/unenrol/' + username + '/' + course)
     //.map(res => res.json())
     .subscribe(res => {
       resolve(res);
     }, (err) => {
       reject(err);
     });
 });
} 
  
}

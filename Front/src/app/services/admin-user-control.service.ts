import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Teacher } from '../shared/teacher.model';
import { Course } from '../shared/course.model';
import { RegisteredUsers } from '../shared/registered-users.model';

@Injectable({
  providedIn: 'root'
})
export class AdminUserControlService {

  readonly baseURL = '/adminUserControl';

  selectedCourses: Teacher;
  courses: Teacher[];

  selectedTeachers: Teacher;
  teachers: Teacher[];

  selectedenrollment: Course;
  enrollments: Course[];

  selecteduser: RegisteredUsers;
  users: RegisteredUsers[];

  constructor(private http : HttpClient) { }

  saveTeacher(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/adminUserControl', data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  getbyCourse() {
    return this.http.get(this.baseURL);
  }

  getstudentsList(course) {
    return this.http.get('/student_enrollments/' + course); 
  }

  //to unenroll students
  unenrollStudent(_id: string) {
    return this.http.delete('/adminUserControl/student' + `/${_id}`);
  }

  //to unassign teachers from courses
  removeTeacherFromCourse(_id: string){
    return this.http.delete('/adminUserControl/teacher' + `/${_id}`);
  }

  deleteFileReg(username: string) {
    return this.http.delete('/users' + `/${username}`);
  }

  getRegisteredUserList(role){
    return this.http.get('/users/' + role); 
  }

  getCoursesofTeacher(teacher){
    return this.http.get('/adminUserControl/' + teacher);
  }


  courselistofnotice(data) {
    return new Promise((resolve, reject) => {
        this.http.get('/adminUserControl/' + data)
      
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  } 


  deleteenrollmentteacher(course){
    return new Promise((resolve, reject) => {
     this.http.delete('/adminUserControl/tutor/' + course)
       //.map(res => res.json())
       .subscribe(res => {
         resolve(res);
       }, (err) => {
         reject(err);
       });
   });
 } 

 //to remove teacher record when unregistering a teacher
 removeTeacherForUnregistering(username){
  return new Promise((resolve, reject) => {
   this.http.delete('/adminUserControl/unregister/' + username)
     //.map(res => res.json())
     .subscribe(res => {
       resolve(res);
     }, (err) => {
       reject(err);
     });
 });
} 
  
}

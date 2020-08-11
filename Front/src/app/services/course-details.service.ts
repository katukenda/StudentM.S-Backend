import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { CourseDetails } from '../shared/course-details.model';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  selectedcourseDetails: CourseDetails;
  courseDetails: CourseDetails[];

  
  readonly baseURL = '/courses';
  

  constructor(private http : HttpClient) { }

 

saveCourseDetails(data) {
  return new Promise((resolve, reject) => {
      this.http.post(this.baseURL, data)
    
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}

  putcourseDetails(cd: CourseDetails) {
  return this.http.put(this.baseURL + `/${cd._id}`, cd);
}

  getcourseDetailsList(course) {
  return this.http.get(this.baseURL + `/` + course); 
  }
  deleteCourse(course) {
    return this.http.delete(this.baseURL + `/` + course);
  }



  getcourseDetailsFullList() {
    return this.http.get(this.baseURL); 
    }



}

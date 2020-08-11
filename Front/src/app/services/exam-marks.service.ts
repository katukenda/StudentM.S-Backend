import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Marks } from '../shared/marks.model';

@Injectable({
  providedIn: 'root'
})
export class ExamMarksService {

  
  selectedMarks: Marks;
  marks: Marks[];
  selectedCMarks: Marks;
  Cmarks: Marks[];
  selectedJavaMarks: Marks;
  Javamarks: Marks[];

  readonly baseURL = '/exam_marks'; //phython
  readonly c_URL = '/exam_marks/c';
  readonly java_URL = '/exam_marks/javaforbeginners';
  readonly all_current_URL = '/exam_marks/all/current';
  readonly all_URL = '/exam_marks/all/';
  readonly get_all = '/exam_marks/get';

  constructor(private http : HttpClient) { }

  

  postMarks(mks : Marks){
    return this.http.post(this.baseURL, mks);
}

  putMarks(mks: Marks) {
  return this.http.put(this.baseURL + `/${mks._id}`, mks);
}

  getMarksList() {//phython
  return this.http.get(this.baseURL);
}

  getCMarksList() {
  return this.http.get(this.c_URL);
}

  getJavaMarksList() {
  return this.http.get(this.java_URL);
}

getAllCurrentMarksList(subject:string,name:string) {
  let params = new HttpParams();
params = params.append('subject', subject);
params = params.append('name', name);
  return this.http.get(this.all_current_URL,{params: params});
}

getAllMarksList(subject:string,name:string) {
  let params = new HttpParams();
params = params.append('subject', subject);
params = params.append('name', name);
  return this.http.get(this.all_URL,{params: params});
}

getAll() {
  return this.http.get(this.get_all);
}

deleteMarksForUnregister(username){
  return new Promise((resolve, reject) => {
   this.http.delete('/exam_marks/unregister/' + username)
     //.map(res => res.json())
     .subscribe(res => {
       resolve(res);
     }, (err) => {
       reject(err);
     });
 });
} 

deleteMarksForUnenrol(username, course){
  return new Promise((resolve, reject) => {
   this.http.delete('/exam_marks/unenrol/' + username + '/' + course)
     //.map(res => res.json())
     .subscribe(res => {
       resolve(res);
     }, (err) => {
       reject(err);
     });
 });
} 

}

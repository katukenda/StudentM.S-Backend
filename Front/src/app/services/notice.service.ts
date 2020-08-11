import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Notice } from '../shared/notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  selectedNotice: Notice;
  notices: Notice[];
  readonly baseURL = '/tutor_dashboard'; //backend 

  constructor(private http : HttpClient) { }

  

saveNotice(data) {
  return new Promise((resolve, reject) => {
      this.http.post(this.baseURL, data)
    
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
}

getNoticeList() {
  return this.http.get(this.baseURL);
}

getNoticeListByCourse(course) {
  return this.http.get(this.baseURL + '/getbyCourse/' + course);
}

getNoticeListByUsername(username) {
  return this.http.get(this.baseURL + '/getbyUsername/' + username);
}

putNotice(ntc: Notice) {
  return this.http.put(this.baseURL + `/${ntc._id}`, ntc);
}

deleteNotice(_id: string) {
  return this.http.delete(this.baseURL + `/${_id}`);
}
}

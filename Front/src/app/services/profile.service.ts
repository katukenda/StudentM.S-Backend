import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Profile } from '../shared/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  selectedImages: Profile;
  image: Profile[];

  constructor(private http:HttpClient) { }

  getProfileImage(username) {
    return this.http.get('/profile/' + username);
  }

  
}

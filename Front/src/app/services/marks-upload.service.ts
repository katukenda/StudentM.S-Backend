import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpEventType, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarksUploadService {
  readonly URL = '/csv/upload';

  constructor(private http: HttpClient) { }
  uploadMarks(fileToUpload: File) {
    const formData: FormData = new FormData();
    //formData.append('name', fileToUpload.name);
    formData.append('file', fileToUpload);
    const req = new HttpRequest('POST', this.URL, formData, {
      reportProgress: true
    });   
    return this.http.request(req);
  }

}

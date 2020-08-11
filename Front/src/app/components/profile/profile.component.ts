import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {saveAs} from 'file-saver';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';
import * as M from '../../../assets/materialize/materialize/js/materialize.min.js';
declare var N: any;

import { Profile } from '../../shared/profile.model';

import { ProfileService } from '../../services/profile.service';

const uri = '/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ ProfileService ]
})
export class ProfileComponent implements OnInit {

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  thumbnail: any;

  imageURL='';

  user = JSON.parse(localStorage.getItem("user")); 

  constructor(private http: HttpClient, private profileService: ProfileService) {}

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      
    
      return;
    
    }
  
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
}

removePreview() {
  
   this.previewUrl = null; 
  
}

onSubmit() {
  const formData = new FormData();
    formData.append('username', this.user.username);
    formData.append('file', this.fileData);
    this.http.post(uri, formData)
      .subscribe(res => {
        
        console.log(res);
        alert('Profile picture uploaded successfully.');
        this.removePreview();
      });
    
}

ngOnInit() {
  this.refreshProfileImage();
}

  refreshProfileImage() {
    this.profileService.getProfileImage(this.user.username).subscribe((res) => {
      this.profileService.image = res as Profile[];
      this.imageURL="../../../../Backend/"+"profileService.image.imagepath";
    });
  }

}

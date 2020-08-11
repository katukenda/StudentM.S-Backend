import { Component, OnInit } from '@angular/core';
import { ExamMarksService } from '../../services/exam-marks.service';
import { Sort } from '@angular/material/sort';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { MarksUploadService } from '../../services/marks-upload.service';



@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  dataset: any[] = [];
  displayedColumns: string[] = ['fullname', 'marks'];
  title:String;
  subject:string;
  username:string;
  message:string;
  isAdmin: boolean = false;
  isTutor: boolean = false;

  constructor(private examMarksService:ExamMarksService ,
              private marksUploadService: MarksUploadService,) { }

  ngOnInit() {
    if (localStorage.getItem('role') == 'Admin') {
      this.isAdmin = true;
    }

    if (localStorage.getItem('role') == 'Teacher') {
      this.isTutor = true;
    }
  }

  public files: NgxFileDropEntry[] = [];
  isShow = true;
  fileName: String;
  confirm = false;
  cancel = false;
  selected:string = 'C';
  seeRes = false;

  toggleDisplay() {
    this.isShow = !this.isShow;
  }

  confirmSubmit() {
    this.confirm = true;
    console.log('confirm' + this.confirm);
    this.uplaodFile();

  }

  cancelSubmit() {
    //this.cancel = true;
    this.files = null;
    console.log("selected"+this.selected);
  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    console.log("selected"+this.selected);
   
  } 

  uplaodFile() {
    if (this.confirm == true) {
      console.log('confirm' + this.confirm);
      console.log("selected"+this.selected);
      localStorage.setItem('subject', this.selected);
      this.confirm = false;
      for (const droppedFile of this.files) {
        if (droppedFile.fileEntry.isFile) {
          const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
          fileEntry.file((file: File) => {
            console.log(droppedFile.relativePath, file);
            this.fileName = file.name;
            console.log('FileToUpload' + file.name);
            this.marksUploadService.uploadMarks(file).subscribe(event => {
              console.log("event"+event.type);
              if(event.type==4){
                this.message = "Upload success";
              } else{
                this.message = "Upload pending.....";
              }
            });
          });
        } else {
          // It was a directory (empty directories are added, otherwise only files)
          const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
          console.log(droppedFile.relativePath, fileEntry);
        }
      }
    }
  }

  seeResults(){
     this.seeRes = true;
     this.subject = localStorage.getItem('subject');
      this.username = ''; 
     console.log('seeRes'+this.seeRes);
     this.examMarksService.getAllCurrentMarksList(this.subject,this.username).subscribe((res)=>{
      console.log(res);
      this.title = res[0].course;
      this.dataset = res as any[];
      console.log(this.title );
      console.log("dataset "+this.dataset);
      //this.dataset.push(res[0]) ;
      
      
    });
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }
  sortData(sort: Sort) {
    
    }

}

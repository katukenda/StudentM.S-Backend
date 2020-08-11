import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Files } from '../../../shared/files.model';
import { FilesJavaForBeginnersService } from '../../../services/files-java-for-beginners.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  providers: [FilesJavaForBeginnersService]
})
export class CourseComponent implements OnInit { 

  course:string;
  filename:string;

  constructor(private route: ActivatedRoute, private http: HttpClient, private fileService: FilesJavaForBeginnersService) { 
    
  }

  ngOnInit() {
    let sstring = this.route.snapshot.paramMap.get('file_course');
    this.course = sstring;
    console.log(this.course);

    this.refreshFilesList();
  }
  
  

  refreshFilesList() {
    this.fileService.getJavaFileList(this.course).subscribe((res) => {
      this.fileService.files = res as Files[];
    });
  }
  
  
} 

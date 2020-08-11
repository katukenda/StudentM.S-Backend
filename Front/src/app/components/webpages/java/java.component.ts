import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { CourseDetails } from '../../../shared/course-details.model';



@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss'],
  providers: [ CourseDetailsService ]
})
export class JavaComponent implements OnInit {

  constructor(private courseDetailsService: CourseDetailsService) { }

  ngOnInit() {
    this.refreshjavaDetailsList();
  }

  refreshjavaDetailsList() {
    this.courseDetailsService.getcourseDetailsList("Java for Beginners").subscribe((res) => {
      this.courseDetailsService.courseDetails = res as CourseDetails[];
    });
  }

}

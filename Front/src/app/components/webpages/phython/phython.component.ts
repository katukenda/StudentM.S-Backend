import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { CourseDetails } from '../../../shared/course-details.model';

@Component({
  selector: 'app-phython',
  templateUrl: './phython.component.html',
  styleUrls: ['./phython.component.scss'],
  providers: [ CourseDetailsService ]
})
export class PhythonComponent implements OnInit {

  constructor(private courseDetailsService: CourseDetailsService) { }

  ngOnInit() {
    this.refreshphythonDetailsList();
  }

  refreshphythonDetailsList() {
    this.courseDetailsService.getcourseDetailsList("Phython").subscribe((res) => {
      this.courseDetailsService.courseDetails = res as CourseDetails[];
    });
  }

}

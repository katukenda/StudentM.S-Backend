import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { CourseDetails } from '../../../shared/course-details.model';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss'],
  providers: [ CourseDetailsService ]
})
export class WebComponent implements OnInit {

  constructor(private courseDetailsService: CourseDetailsService) { }

  ngOnInit() {
    this.refreshwebDetailsList();
  }

  refreshwebDetailsList() {
    this.courseDetailsService.getcourseDetailsList("Web Designing").subscribe((res) => {
      this.courseDetailsService.courseDetails = res as CourseDetails[];
    });
  }

}

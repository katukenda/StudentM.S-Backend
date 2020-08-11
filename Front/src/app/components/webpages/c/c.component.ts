import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { CourseDetails } from '../../../shared/course-details.model';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
  providers: [ CourseDetailsService ]
})
export class CComponent implements OnInit {

  constructor(private courseDetailsService: CourseDetailsService) { }

  ngOnInit() {
    this.refreshcDetailsList();
  }

  refreshcDetailsList() {
    this.courseDetailsService.getcourseDetailsList("C").subscribe((res) => {
      this.courseDetailsService.courseDetails = res as CourseDetails[];
    });
  }

}

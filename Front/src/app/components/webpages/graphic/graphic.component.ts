import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { CourseDetails } from '../../../shared/course-details.model';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss'],
  providers: [ CourseDetailsService ]
})
export class GraphicComponent implements OnInit {

  constructor(private courseDetailsService: CourseDetailsService) { }

  ngOnInit() {
    this.refreshgraphicDetailsList();
  }

  refreshgraphicDetailsList() {
    this.courseDetailsService.getcourseDetailsList("Graphic Designing").subscribe((res) => {
      this.courseDetailsService.courseDetails = res as CourseDetails[];
    });
  }

}

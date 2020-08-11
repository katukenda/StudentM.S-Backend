import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import { ExamMarksService } from '../../../services/exam-marks.service';
import { AttendanceService } from '../../../services/attendance.service';
import { ActivatedRoute} from '@angular/router';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var N: any;

import { Course } from '../../../shared/course.model';

@Component({
  selector: 'app-course-enrollments',
  templateUrl: './course-enrollments.component.html',
  styleUrls: ['./course-enrollments.component.scss']
})
export class CourseEnrollmentsComponent implements OnInit { 

  user = JSON.parse(localStorage.getItem("user")); 

  course : string;
  coursearray: any;

  constructor(private courseDetailsService: CourseDetailsService, private adminService: AdminUserControlService,
    private examMarksService: ExamMarksService, private attendanceService: AttendanceService, private route: ActivatedRoute) { 
    let sstring = this.route.snapshot.paramMap.get('file_course');
    this.course = sstring;
    console.log(this.course); 
    }

  ngOnInit() {
    this.getCourse();
    this.refreshStudentsList();
  }

  getCourse(){
    this.courseDetailsService.getcourseDetailsFullList()
.subscribe((res)=>{
    this.coursearray = res;
    console.log(this.coursearray);
});  }

refreshStudentsList() {
  this.adminService.getstudentsList(this.course).subscribe((res) => {
   
    this.adminService.enrollments = res as Course[];
  });
}

Submit(){
  
    this.refreshStudentsList();
  
 }

 onDelete(_id: string) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.adminService.unenrollStudent(_id).subscribe((res) => {

      this.refreshStudentsList();
      this.removeAttendance();
      this.removeExamMarks();
      
      N.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}

//to remove attendance when unenrolling
removeAttendance(){
  this.attendanceService.deleteAttendanceForUnenrol(this.user.username, this.course).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log(err);
  })
}

//to remove marks when unenrolling
removeExamMarks(){
  this.examMarksService.deleteMarksForUnenrol(this.user.username, this.course).then((result)=>{
    console.log(result);
  },(err)=>{
    console.log(err);
  })
}



}

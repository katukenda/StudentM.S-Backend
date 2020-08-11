import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../../../services/attendance.service';
import { CourseDetailsService } from '../../../services/course-details.service';
import { AdminUserControlService } from '../../../services/admin-user-control.service';

import { Attendance } from '../../../shared/attendance.model';
import { Course } from '../../../shared/course.model';

declare var M: any;

import * as N from '../../../../assets/materialize/materialize/js/materialize.min.js';

@Component({
  selector: 'app-attendance-management',
  templateUrl: './attendance-management.component.html',
  styleUrls: ['./attendance-management.component.scss'],
  
})
export class AttendanceManagementComponent implements OnInit {

  
  course : '';
  coursearray: any;
  studentarray: any;

  constructor(private attendanceService: AttendanceService, private courseDetailsService: CourseDetailsService,
    private adminService: AdminUserControlService) { }

   
    

  
  username: '';
  date: '';
  attended_days: '';
  total_days: '';
  
  

  ngOnInit() {
    var elems = document.querySelectorAll('.modal');
    var instances = N.Modal.init(elems);
      this.getCourse();
  }

  resetForm() {
   
    
    
    this.username= "";
    this.attended_days=null;
    
  };

  getCourse(){
    this.courseDetailsService.getcourseDetailsFullList()
.subscribe((res)=>{
    this.coursearray = res;
    console.log(this.coursearray);
});  }
  
Submit(){
  
  this.refreshStudentsList();
  
}

refreshStudentsList() {
  this.adminService.getstudentsList(this.course).subscribe((res) => {
    this.adminService.enrollments = res as Course[];
  });
}

SubmitDay(event :any){
 console.log("event" +event);
 this.username = event;
}

SubmitAttendance(){
  //console.log("username"+username);
 
    
  this.attendanceService.saveAttendance({course:this.course, username: this.username, attended_days: this.attended_days, total_days: this.total_days, date:this.date}).then((result)=>{
    console.log(result);
    alert('Saved successfully.');
    this.resetForm();
    }, (err)=>{
      console.log(err);
      alert('An error occured. Please try again.');
   });
}

}

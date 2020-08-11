import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { AdminUserControlService } from '../../../services/admin-user-control.service';

import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var N: any;

import { Teacher } from '../../../shared/teacher.model';
// import { userInfo } from 'os';

@Component({
  selector: 'app-tutor-courses',
  templateUrl: './tutor-courses.component.html',
  styleUrls: ['./tutor-courses.component.scss']
})
export class TutorCoursesComponent implements OnInit {

  course : '';
  teacher1 : '';
  teacher2 : '';
  coursearray: any;
  teacherarray: any;
  enroll : any;
  

  private courses = [];

  constructor(private courseDetailsService: CourseDetailsService, private adminService: AdminUserControlService ) { }

  

  ngOnInit() {
    this.getCourse();
    this.getTeacherName();
    
  }

  getCourse(){
    this.courseDetailsService.getcourseDetailsFullList()
.subscribe((res)=>{
    this.coursearray = res;
    console.log(this.coursearray);
});  }
  

  getTeacherName(){
  this.adminService.getRegisteredUserList("Teacher")
.subscribe((res)=>{
  this.teacherarray = res;
  console.log(this.teacherarray);
});  }

Submit(){
  if(this.course == null || this.teacher1 == null){
    M.toast({ html: 'Please choose teacher && course correctly ', classes: 'rounded ' });
  }
  else{
    this.adminService.saveTeacher({course:this.course, teacher:this.teacher1}).then((result)=>{
      console.log(result);
      this.enroll = result;
      if(this.enroll.enrollment){
        M.toast({ html: 'Teacher is successfully assigned for the course.', classes: 'rounded ' });
        
      }
      else{
        M.toast({ html: 'This teacher is already assigned for this course ', classes: 'rounded ' });
      }
     
      }, (err)=>{
        console.log(err);
        M.toast({ html: 'An error occured please try again.', classes: 'rounded ' });
     });
  }
  
  
 }

 refreshbyCourseList() {
  this.adminService.getbyCourse().subscribe((res) => {
    this.adminService.courses = res as Teacher[];
  });
}

refreshTeacherCourseList() {
  this.adminService.getCoursesofTeacher(this.teacher2).subscribe((res) => {
    this.adminService.courses = res as Teacher[];
  });
}

teacherSubmit(){
  if(this.teacher2 == null){
    M.toast({ html: 'select a teacher', classes: 'rounded ' });
  }
  this.refreshTeacherCourseList();
  
}

onDelete(_id: string) {
  if (confirm('Are you sure to remove this teacher from the course ?') == true) {
    this.adminService.removeTeacherFromCourse(_id).subscribe((res) => {
      this.refreshTeacherCourseList();
      N.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}


}

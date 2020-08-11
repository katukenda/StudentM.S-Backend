import { Component, OnInit } from '@angular/core';
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import { CourseService } from '../../../services/enrollment.service';
import { AttendanceService } from '../../../services/attendance.service';
import { ExamMarksService } from '../../../services/exam-marks.service';
import { PayhereService } from '../../../services/payhere.service';

import { RegisteredUsers } from '../../../shared/registered-users.model';

@Component({
  selector: 'app-unregister-students',
  templateUrl: './unregister-students.component.html',
  styleUrls: ['./unregister-students.component.scss']
})
export class UnregisterStudentsComponent implements OnInit {

  user : '';
  userarray: any;
  

  constructor(private adminService : AdminUserControlService, private enrollmentService : CourseService, private attendanceService : AttendanceService,
    private marksService : ExamMarksService, private payService : PayhereService) { }

  ngOnInit() {
    this.getStudentsList();
  }

  getStudentsList() {
    this.adminService.getRegisteredUserList("Student").subscribe((res) => {
      this.adminService.users = res as RegisteredUsers[];
    });
  }

  onDeleteReg(username: string) {
    if (confirm('Are you sure to unregister this student ?') == true) {
      this.adminService.deleteFileReg(username).subscribe((res) => {
        this.getStudentsList();
        console.log(username);
        this.removeEnrollment(username);
        this.removeAttendance(username);
        this.removeMarks(username);
        
      });
    }
  }

  //to remove enrollment when unregistering
  removeEnrollment(username : string){
    this.enrollmentService.deleteEnrollmentForUnregister(username).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }

  //to remove attendance when unregistering
  removeAttendance(username : string){
    this.attendanceService.deleteAttendanceForUnregister(username).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }

  //to remove marks when unregistering
  removeMarks(username : string){
    this.marksService.deleteMarksForUnregister(username).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }

  //to remove pays when unregistering
  removePays(username : string){
    this.payService.deletePaysForUnregister(username).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }

}

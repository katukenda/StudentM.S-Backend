import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { NgForm } from '@angular/forms';
import { CourseDetails } from '../../../shared/course-details.model';
import {  CourseService} from '../../../services/enrollment.service';
import { AdminUserControlService} from '../../../services/admin-user-control.service';

import * as N from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var M: any;

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
  providers: [ CourseDetailsService ] 
})
export class CourseDetailsComponent implements OnInit {

    course: '';
    duartion: '';
    regfee: '';
    totfee:'';
    insfee: '';
    dayandtime: '';
    sdate: '';
    edate: '';

    courseDetail:any;

  constructor(private courseDetailsService: CourseDetailsService, private enrollmentservice:CourseService, private adminuserservice:AdminUserControlService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshcourseDetailsList();
    
  }

  

  Submit(){
    
   
    this.courseDetailsService.saveCourseDetails({course:this.course, duaration:this.duartion, regfee:this.regfee, totfee:this.totfee, insfee:this.insfee, dayandtime:this.dayandtime, sdate:this.sdate, edate:this.edate }) 
   
    .then((result)=>{
      console.log(result);
      this.courseDetail = result;
      if(this.courseDetail.success){
        M.toast({ html: this.courseDetail.msg, classes: 'rounded ' });
       this.course = '';
        this.duartion = '';
        this.regfee = '';
        this.totfee = '';
       this.insfee = '';
       this.dayandtime = '';
       this.sdate='';
       this.edate='';
  } else{
     M.toast({html: this.courseDetail.msg , classes: 'rounded'});
  }
       }, (err)=>{
        console.log(err);
        M.toast({ html: 'Error occured in adding course details.', classes: 'rounded ' });
     });
  }
  
  refreshcourseDetailsList() {
    this.courseDetailsService.getcourseDetailsFullList().subscribe((res) => {
      this.courseDetailsService.courseDetails = res as CourseDetails[];
    });
  }


  

  onDelete(_id: string, form: NgForm, course: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.courseDetailsService.deleteCourse(_id).subscribe(() => {
        this.refreshcourseDetailsList();
        console.log(course);
        this.deletestuenrollments(course);
        this.deletetutorenrollments(course);
        console.log('done');
        
        //N.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  };

  deletestuenrollments(course:string){
    this.enrollmentservice.deleteenrollment(course).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }
  deletetutorenrollments(course:string){
    this.adminuserservice.deleteenrollmentteacher(course).then((result)=>{
      console.log('teacher');
    },(err)=>{
      console.log(err);
    })
  }


  resetForm(form?: NgForm) {
    if (form)
        form.reset();
    this.courseDetailsService.selectedcourseDetails = {
      _id: "",
      course: "",
      duartion: "",
      regfee: "",
      totfee: "",
      insfee: "",
      dayandtime: "",
      sdate: "",
      edate: ""

    }
  
}

onEdit(cd : CourseDetails){
  this.courseDetailsService.selectedcourseDetails = cd;
}

}

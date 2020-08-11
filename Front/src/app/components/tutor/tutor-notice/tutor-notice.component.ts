import { Component, OnInit } from '@angular/core';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
import { NgForm } from '@angular/forms';
import { NoticeService } from '../../../services/notice.service';
import { Notice } from '../../../shared/notice.model';
// import { ActivatedRoute} from '@angular/router';
import {AdminUserControlService} from '../../../services/admin-user-control.service';

declare var N: any;
 
@Component({
  selector: 'app-tutor-notice',
  templateUrl: './tutor-notice.component.html',
  styleUrls: ['./tutor-notice.component.scss'],
  providers: [ NoticeService ]
})
export class TutorNoticeComponent implements OnInit {

  course: string ;
  username: '';
  date: null;
  user = JSON.parse(localStorage.getItem("user")); 

  courses: any;

  notice:any;

  constructor(private noticeService: NoticeService, private adminservice:AdminUserControlService) { 
    // let sstring = this.route.snapshot.paramMap.get('notice_course');
    // this.course = sstring;
    // console.log(this.course); 
    // this.getenrolledcourses();
    console.log(this.user.username);
    // this.getenrolledcourses();
    this.getCourse();
    
  }

  ngOnInit() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);

    this.resetForm();
    this.refreshNoticeList();
  }

  resetForm(form?: NgForm) {
    if (form)
        form.reset();
    this.noticeService.selectedNotice = {
      _id: "",
      courseId:"",
      course: "",
      date: null,
      notice: "",
      username: "",
    }
}



Submit(){
  if(this.course == null){
   M.toast({ html: 'please choose a course ', classes: 'rounded ' });
  }
  else{
   this.noticeService.saveNotice({course:this.course, username:this.user.username, date:this.date, notice:this.notice}).then((result)=>{
     console.log(result);
     this.notice = result;
     this.course='';
     this.date=null;
     this.notice='';
     
     this.refreshNoticeList();
     N.toast({ html: 'Saved successfully', classes: 'rounded '});
     
     
     
     }, (err)=>{
       console.log(err);
    });
 
  }

}

refreshNoticeList() {
  this.noticeService.getNoticeListByUsername(this.user.username).subscribe((res) => {
    this.noticeService.notices = res as Notice[];
  });
}

onEdit(ntc : Notice){
  this.noticeService.selectedNotice = ntc;
}

onDelete(_id: string, form: NgForm) {
  if (confirm('Are you sure to delete this record ?') == true) {
    this.noticeService.deleteNotice(_id).subscribe((res) => {
      this.refreshNoticeList();
      this.resetForm(form);
      N.toast({ html: 'Deleted successfully', classes: 'rounded' });
    });
  }
}

// getenrolledcourses(){
//   this.adminservice.courselistofnotice(this.user.username).then((data)=>{
//     this.courses = data;
//     console.log(this.courses);
//   },(err)=>{
//     console.log(err);
//   })
// }

getCourse(){
  console.log("this.user"+this.user.username);
  this.adminservice.getCoursesofTeacher(this.user.username)
.subscribe((res)=>{
  this.courses = res;
  console.log(this.courses);
});  }

}

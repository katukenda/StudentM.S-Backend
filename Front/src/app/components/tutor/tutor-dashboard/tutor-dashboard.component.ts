import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from '../../../services/course-details.service';
import { AdminUserControlService } from '../../../services/admin-user-control.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-tutor-dashboard',
  templateUrl: './tutor-dashboard.component.html',
  styleUrls: ['./tutor-dashboard.component.scss']
})
export class TutorDashboardComponent implements OnInit {

  user = JSON.parse(localStorage.getItem("user")); 

  course : '';
  courses : any; 

  constructor(
    private courseDetailsService: CourseDetailsService,
    private adminService: AdminUserControlService,
    private router: Router,
  ) { 
    this.getCourse(); 
  }

  ngOnInit() {

  }
  getCourse(){
    console.log("this.user"+this.user.username);
    this.adminService.getCoursesofTeacher(this.user.username)
.subscribe((res)=>{
    this.courses = res;
    console.log(this.courses);
});  }

onSelect(item){
  this.router.navigate(['/tutor_dashboard',item.course]);

}
// onSelect2(item){
//   this.router.navigate(['/tutor_dashboard/addnotice',item.course]);

// }

confirmSubmittutor(event:any){
  console.log("event"+event);
  localStorage.setItem('subject', event);
}

}

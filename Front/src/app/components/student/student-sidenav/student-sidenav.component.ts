import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { Student } from './student.model';

@Component({
  selector: 'app-student-sidenav',
  templateUrl: './student-sidenav.component.html',
  styleUrls: ['./student-sidenav.component.scss']
})
export class StudentSidenavComponent implements OnInit {
  
  user = JSON.parse(localStorage.getItem("user")); 
  currentUser: Student;
  students: Student[];

  constructor(
    private authService: AuthenticationService, 
    private router: Router
  ) { }

  ngOnInit() {
    // this.currentUser = JSON.parse(localStorage.getItem('user'));
    
  }

}

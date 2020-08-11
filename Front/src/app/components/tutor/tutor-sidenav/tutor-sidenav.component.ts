import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { Teacher } from './teacher.model';

@Component({
  selector: 'app-tutor-sidenav',
  templateUrl: './tutor-sidenav.component.html',
  styleUrls: ['./tutor-sidenav.component.scss']
})
export class TutorSidenavComponent implements OnInit {

  currentUser: Teacher;
  teachers: Teacher[] = [];

  constructor(
    private authService: AuthenticationService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
  }

} 

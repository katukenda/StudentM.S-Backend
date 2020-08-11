import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-student-navbar',
  templateUrl: './student-navbar.component.html',
  styleUrls: ['./student-navbar.component.scss']
})
export class StudentNavbarComponent implements OnInit {

  constructor(private _authService: AuthenticationService) { }

  ngOnInit() {
  }

}

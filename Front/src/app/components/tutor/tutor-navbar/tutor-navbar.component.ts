import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-tutor-navbar',
  templateUrl: './tutor-navbar.component.html',
  styleUrls: ['./tutor-navbar.component.scss']
})
export class TutorNavbarComponent implements OnInit {

  constructor(
    private _authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit {

  user = JSON.parse(localStorage.getItem("user")); 
  

  constructor(private _authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

}

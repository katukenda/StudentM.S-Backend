import { Component, OnInit } from '@angular/core';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  user = JSON.parse(localStorage.getItem("user")); 

  constructor(private authService: AuthenticationService, 
    private router: Router) { }

  ngOnInit() {
   
  }

}

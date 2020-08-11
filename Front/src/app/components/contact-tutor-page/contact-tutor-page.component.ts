import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';


import * as M from '../../../assets/materialize/materialize/js/materialize.min.js'

@Component({
  selector: 'app-contact-tutor-page',
  templateUrl: './contact-tutor-page.component.html',
  styleUrls: ['./contact-tutor-page.component.scss']
})
export class ContactTutorPageComponent implements OnInit {

  registerUserData = {};

  options = {};

  constructor(
    private _auth: AuthenticationService
  ) { }

  ngOnInit() {
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});
  }

  registerUser(){
     /* this._auth.registerUser(this.registerUserData)
       .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          },
          err => console.log(err)
       )  */
  }

}

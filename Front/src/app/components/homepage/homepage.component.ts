import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ValidateService } from '../../services/validate.service';


import * as M from '../../../assets/materialize/materialize/js/materialize.min.js'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  registerUserData = {};

  options = {};

  constructor(
    private _auth: AuthenticationService,
    private validate: ValidateService
  ) { }

  ngOnInit() {
    //slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });

      //drop down
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.dropdown-trigger');
        var instances = M.Dropdown.init(elems);
      });

      // Auto Complete - search
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
          "C": null,
          "Graphic Designing": null,
          "Java for Beginners": null,
          "Phython": null,
          "Web Designing": null
        }
      });

      // Scrollspy - search
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
       ) */
  }




  
}



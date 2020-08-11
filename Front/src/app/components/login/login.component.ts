import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

import * as M from '../../../assets/materialize/materialize/js/materialize.min.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
 

  
  username: any;
  password: any;
  
  constructor(
    private _auth: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
    }

    this._auth.loginUser(user).subscribe(data => {
      if(data.success){
        
          if(data.user.role=="Student")
             this._router.navigate(['/student_dashboard']);
          if(data.user.role=="Teacher")
             this._router.navigate(['/tutor_dashboard']);
          if(data.user.role=="Admin")
             this._router.navigate(['/admin_dashboard']);

          this._auth.storeUserData(data.token, data.user);
      } else {
        M.toast({html: data.msg , classes: 'rounded'});
        //this._router.navigate(['login']);
      }
    });
  }

}

        
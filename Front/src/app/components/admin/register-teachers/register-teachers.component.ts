import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { ValidateService } from '../../../services/validate.service';


import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js'

@Component({
  selector: 'app-register-teachers',
  templateUrl: './register-teachers.component.html',
  styleUrls: ['./register-teachers.component.scss']
})
export class RegisterTeachersComponent implements OnInit {

  name = '';
  username = '';
  email = '';
  address = '';
  phoneNumber = ''
  password = '';
  role="Teacher";
  register : any;

  constructor(private _auth: AuthenticationService,
    private validate: ValidateService) { }

  ngOnInit() { 
  }

  registerUser(){
    
   
    this._auth.saveUser({role:this.role, name:this.name, email:this.email, address:this.address, phoneNumber:this.phoneNumber, username:this.username, password:this.password }) 
   
    .then((result)=>{
      console.log(result);
      this.register = result;
      if(this.register.success){
        M.toast({ html: this.register.msg, classes: 'rounded ' });
       this.name = '';
        this.username = '';
        this.email = '';
        this.address = '';
       this.phoneNumber = ''
       this.password = '';
  } else{
     M.toast({html: this.register.msg , classes: 'rounded'});
  }
       }, (err)=>{
        console.log(err);
        M.toast({ html: 'Error occured in registering teacher.', classes: 'rounded ' });
     });
  }
     

}
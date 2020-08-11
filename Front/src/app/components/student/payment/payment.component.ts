import { Component, OnInit } from '@angular/core';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public title="Payments";

  constructor() { }

  state = true;

    regClick() {

      if(this.state != true){
      this.state=true;
      };
    }
    courseClick() {
      if(this.state != false){
      this.state = false;
    }

    }

    state1 = true;

    totClick() {

      if(this.state1 != true){
      this.state1=true;
      };
    }
    insClick() {
      if(this.state1 != false){
      this.state1 = false;
    }

    }

  ngOnInit() {  
  }
  

}

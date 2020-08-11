import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PayhereService} from '../../../services/payhere.service';

declare var payhere: any;

declare var M: any;

@Component({
  selector: 'app-payhere',
  templateUrl: './payhere.component.html',
  styleUrls: ['./payhere.component.scss']
})
export class PayhereComponent {

  course: string ;
  amount: number ; 
  payments : any;
  user = JSON.parse(localStorage.getItem("user")); 

  constructor(private route: ActivatedRoute, private PayService: PayhereService) { 
    let sstring = this.route.snapshot.paramMap.get('pay_course');
    this.course = sstring;
    this.getrecord();
  }
 
  
  ngOnInit() {

    payhere.onCompleted=(orderId)=>{
      alert('Payment is successfull '+orderId);
      console.log(this.course);
      console.log(this.amount);
      this.sendrecord();
      this.amount = null;
      this.getrecord();
  }

  payhere.onDismissed = function onDismissed() {
    alert('Payment dismissed');
    
  };

  payhere.onError = function onError(error) {
    alert('Error:' + error);
  };

}


payNow(){

  const payment = {
    sandbox: true,
    merchant_id: '1213116',       // Replace your payhere Merchant ID /*Goto payhere account -> settings-> copy merchantId and replace */
    return_url: 'http://sample.com/return',
    cancel_url: 'http://sample.com/cancel',
    notify_url: 'http://sample.com/notify/',
    order_id: this.course+' 01', //replace value of this field as your requirement
    items: 'xxxxxx' ,
    amount: this.amount,
    currency: 'USD',
     adOwnerId: "xxxx", 
    first_name: "sunil",
    last_name: 'Perera',
    email: "sample_user@gmail.com",
    phone: '0771234567',
    address: 'No.1, Galle Road',
    city: 'Colombo',
    country: 'Sri Lanka',
    delivery_address: 'No. 46, Galle road, Kalutara South',
    delivery_city: 'Kalutara',
    delivery_country: 'Sri Lanka',

/**
* Above fields of payment are compulsory.
*/


  };

if(this.amount==null){
  M.toast({ html: 'insert a value ', classes: 'rounded ' });

}else if(this.amount%500 != 0){
  M.toast({ html: 'insert value of multiply of 500 ', classes: 'rounded ' });

}
else{
  payhere.startPayment(payment);
}
   




}

sendrecord(){

  this.PayService.postrecord({course:this.course, amount:this.amount, username:this.user.username}).then((result)=>{
    console.log('success');
  },(err)=>{
    console.log(err);
  });
  
  
  }
  getrecord(){
     this.PayService.getPaymentsByUsernameandcourse(this.user.username,this.course).then((result)=>{
      this.payments = result;
      console.log(this.payments);
    },(err)=>{
      console.log(err);
    }); 
  }


}

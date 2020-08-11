import { Component, OnInit } from '@angular/core';
import { IPayment } from '../../../shared/payment.model';
import { Payment } from '../../../shared/payment.model';

declare var payhere: any;



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  paymentDetails: IPayment
  dataSet = []

  constructor() { }

  ngOnInit() {

    this.paymentDetails = new Payment();

    this.dataSet = [

      new Payment("xxxxx",100),
      new Payment("xxxxx",200),  
      new Payment("xxxxx",300),
      new Payment("xxxxx",400),
      

    ]

    payhere.onCompleted=(orderId)=>{
      alert('Payment is successfull '+orderId)
 
      //this function will call back when the transaction is successfull

    }

    payhere.onDismissed = function onDismissed() {
      alert('Payment dismissed');
    };

    payhere.onError = function onError(error) {
      alert('Error:' + error);
    };


    
  }


  payNow(data){

    const payment = {
      sandbox: true,
      merchant_id: '1213116',       // Replace your payhere Merchant ID /*Goto payhere account -> settings-> copy merchantId and replace */
      return_url: 'http://sample.com/return',
      cancel_url: 'http://sample.com/cancel',
      notify_url: 'http://sample.com/notify/',
      order_id: data.advertistmentId, //replace value of this field as your requirement
      items: 'xxxxxx' ,
      amount: data.amount,
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
 
      payhere.startPayment(payment);
    }

}



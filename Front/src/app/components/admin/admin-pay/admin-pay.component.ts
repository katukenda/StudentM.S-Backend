import { Component, OnInit } from '@angular/core';
import { PayhereService} from '../../../services/payhere.service';
import { WebSocketService} from '../../../services/web-socket.service';
declare var M: any;
@Component({
  selector: 'app-admin-pay',
  templateUrl: './admin-pay.component.html',
  styleUrls: ['./admin-pay.component.scss']
})
export class AdminPayComponent implements OnInit {

  course : '';
  coursearray : any;
  payments : any;

  constructor(private chatService: WebSocketService, private payhereservice:PayhereService) { }

  ngOnInit() {
    this.groups();
  }

  groups(){
    this.chatService.getchatgroups().then((data)=>{
      this.coursearray = data;
      console.log(data);
    }); 
    }

    getpayments(){
      this.payhereservice.getPaymentsBycourse(this.course).then((data)=>{
        this.payments = data;
        console.log(this.payments);
      }, (err)=>{
        console.log(err);
     });
     }

     
Submit(){
  if(this.course == null){
     M.toast({ html: 'choose a course ', classes: 'rounded ' });
  }else{
 this.getpayments();
  }
  
  
}

}

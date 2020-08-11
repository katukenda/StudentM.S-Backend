import { Component, OnInit, ViewChild } from '@angular/core';
import { WebSocketService} from '../../../services/web-socket.service';
import * as io from 'socket.io-client';

declare var M: any;
 
@Component({
  selector: 'app-student-chat',
  templateUrl: './student-chat.component.html',
  styleUrls: ['./student-chat.component.scss']
})
export class StudentChatComponent implements OnInit {

  @ViewChild('content', {static: false}) private content: any;

  socket = io('');
  user = JSON.parse(localStorage.getItem("user")); 
   room = String;
   message = '';

   chats : any;
   check : any;
   chatgroups : any; 
  

   constructor(private chatService: WebSocketService) { 
    this.socket.on('new-message', (data)=>{ 
      this.chats.push(data);
   });
   

  
  }

  ngOnInit() {
    
  // console.log(this.chatgroups);
  this.groups();
    
    }
  sendMessage(){
    this.chatService.saveChat({name:this.user.username, room:this.room, message:this.message}).then((result)=>{
    this.socket.emit('save-message', result); 
    this.message = "";
    }, (err)=>{
      console.log(err);
   });
  }

 getChat(){
    this.chatService.getChatByRoom(this.room).then((data)=>{
      this.chats = data;
    }, (err)=>{
      console.log(err);
   });
   } 
  joinRoom(){
   
  
    this.chatService.getUsersByRoom(this.room,this.user.username).then((data)=>{
     this.check = data;
     console.log(data);
     if(this.check.success){
       this.getChat();

     }
     else{

      this.chats = null;
      M.toast({ html: 'You are not enroll for this course ', classes: 'rounded ' });
          }
      });
      }



groups(){
this.chatService.getchatgroups().then((data)=>{
  this.chatgroups = data;
  console.log(data);
});
}

    
  }



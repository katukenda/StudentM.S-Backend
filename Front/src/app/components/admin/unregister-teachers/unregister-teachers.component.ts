import { Component, OnInit } from '@angular/core';
import { AdminUserControlService } from '../../../services/admin-user-control.service';

import { RegisteredUsers } from '../../../shared/registered-users.model';

@Component({
  selector: 'app-unregister-teachers',
  templateUrl: './unregister-teachers.component.html',
  styleUrls: ['./unregister-teachers.component.scss']
})
export class UnregisterTeachersComponent implements OnInit {

  user : '';
  userarray: any;

  constructor(private adminService: AdminUserControlService) { }

  ngOnInit() {
    this.getTeachersList();
  }

  getTeachersList() {
    this.adminService.getRegisteredUserList("Teacher").subscribe((res) => {
      this.adminService.users = res as RegisteredUsers[];
    });
  }

  onDeleteReg(username: string) {
    if (confirm('Are you sure to unregister this teacher ?') == true) {
      this.adminService.deleteFileReg(username).subscribe((res) => {
        this.getTeachersList();
        console.log(username);
        this.removeTeacherRecord(username);
        console.log("Removed teacher record.");
        
      });
    }
  }

  //remove teacher record when unregistering 
  removeTeacherRecord(username : string){
    this.adminService.removeTeacherForUnregistering(username).then((result)=>{
      console.log(result);
    },(err)=>{
      console.log(err);
    })
  }

}

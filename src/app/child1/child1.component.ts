import { Component, OnInit } from '@angular/core';
import { ActinactuserService } from '../actinactuser.service';
import { User } from '../user';
import { UsermanagementService } from '../usermanagement.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
users:User[]=[]
activeusers=[]
  constructor(private usermanagement:UsermanagementService,
     private actinact:ActinactuserService) { }

userselected(user){
this.usermanagement.userselected.emit(user)
}
hovereduser(name){
  this.usermanagement.userhovered.emit(name)
}

deactivate(i){
this.actinact.userdeactivated.emit(this.activeusers[i])
this.activeusers.splice(i,1)
}
  ngOnInit(): void {
    this.users=this.usermanagement.userlist
    this.activeusers=this.actinact.activeusers

    this.actinact.useractivated.subscribe((response)=>{
      this.activeusers.push(response.username)
    })
  }

}

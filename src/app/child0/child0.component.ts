import { Component, OnInit } from '@angular/core';
import { ActinactuserService } from '../actinactuser.service';
import { UsermanagementService } from '../usermanagement.service';

@Component({
  selector: 'app-child0',
  templateUrl: './child0.component.html',
  styleUrls: ['./child0.component.css']
})
export class Child0Component implements OnInit {
inactiveusers=[];
  constructor(private usermanagement:UsermanagementService, private actinact:ActinactuserService) { }

  adduser(){
    this.usermanagement.adduser()
  }

  activate(i){
    this.actinact.useractivated.emit({username:this.inactiveusers[i],i})
    this.inactiveusers.splice(i,1)
  }

  ngOnInit(): void {
    this.inactiveusers=this.actinact.inactiveusers;
    this.actinact.userdeactivated.subscribe((user)=>{
      this.inactiveusers.push(user)
    })
  }

}

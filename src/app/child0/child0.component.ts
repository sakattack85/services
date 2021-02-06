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
    this.actinact.activate(i)
  }

  ngOnInit(): void {
    this.inactiveusers=this.actinact.inactiveusers;
  }

}

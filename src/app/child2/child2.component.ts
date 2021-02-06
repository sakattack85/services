import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsermanagementService } from '../usermanagement.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
myuser:User=new User("","");
username=""
  constructor(private usermanagement:UsermanagementService) { }

  ngOnInit(): void {
    this.usermanagement.userhovered.subscribe((name)=>{
this.username=name;
    })


    this.usermanagement.userselected.subscribe((response)=>{
this.myuser=response;
    })
  }

}

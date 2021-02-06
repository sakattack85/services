import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsermanagementService } from '../usermanagement.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
users:User[]=[]
  constructor(private usermanagement:UsermanagementService) { }

  ngOnInit(): void {
    this.users=this.usermanagement.userlist
    
  }

}

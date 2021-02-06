import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../usermanagement.service';

@Component({
  selector: 'app-child0',
  templateUrl: './child0.component.html',
  styleUrls: ['./child0.component.css']
})
export class Child0Component implements OnInit {

  constructor(private usermanagement:UsermanagementService) { }

  adduser(){
    this.usermanagement.adduser()
  }

  ngOnInit(): void {
  }

}

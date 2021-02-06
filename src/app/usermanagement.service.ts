import { Injectable } from '@angular/core';
import { User } from './user';
import { UsercreationService } from './usercreation.service';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
  adduser() {
    this.userlist.push(new User('iosifnew',"nnnnnn@dfdfkf"))
    console.log('added')
  }
userlist:User[]=[]
  constructor(private usercreation:UsercreationService) {
    this.userlist=this.usercreation.userlist
   }
}

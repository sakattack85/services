import { EventEmitter, Injectable, Output } from '@angular/core';
import { User } from './user';
import { UsercreationService } from './usercreation.service';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {
  @Output() userselected=new EventEmitter();
  @Output() userhovered=new EventEmitter();
  
  adduser() {
    this.userlist.push(new User('iosifnew',"nnnnnn@dfdfkf"))
    console.log('added')
  }
userlist:User[]=[]
  constructor(private usercreation:UsercreationService) {
    this.userlist=this.usercreation.userlist
   }
}

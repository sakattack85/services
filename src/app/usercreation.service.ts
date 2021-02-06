import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsercreationService {
  userlist:User[]=[]

  constructor() { 
    this.userlist.push(new User('iosif',"@dfdfkf"), new User('iosif2',"ghgh@dfdfkf"))

  }
}

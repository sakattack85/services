import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActinactuserService {
 @Output() useractivated=new EventEmitter();
 @Output() userdeactivated=new EventEmitter();

  deactivate(i: any) {
    this.inactiveusers.push(this.activeusers[i])
    this.activeusers.splice(i,1)
  }

  activate(i: any) {
    this.activeusers.push(this.inactiveusers[i])
    this.inactiveusers.splice(i,1)
  }

activeusers=['Max', 'Anna']
inactiveusers=['Chris', 'Iosif']
  constructor() { }
}

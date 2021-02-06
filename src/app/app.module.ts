import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child0Component } from './child0/child0.component';
import { UsermanagementService } from './usermanagement.service';
import { ActinactuserService } from './actinactuser.service';
import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child0Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsermanagementService, ActinactuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

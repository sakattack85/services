import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child0Component } from './child0/child0.component';
import { UsermanagementService } from './usermanagement.service';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child0Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [UsermanagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }

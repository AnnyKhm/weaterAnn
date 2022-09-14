import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './current.component';
import { CurrentRoutingModule } from './current-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CurrentComponent],
  imports: [
    CommonModule,
    CurrentRoutingModule,
    FormsModule
  ],
  exports: [CurrentComponent]
})
export class CurrentModule {
  seveZip(){
    let zip = {};
  }
 }
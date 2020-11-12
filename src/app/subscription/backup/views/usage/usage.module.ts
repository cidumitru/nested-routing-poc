import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageComponent } from './usage.component';
import { UsageRoutingModule } from './usage.routing-module';



@NgModule({
  declarations: [UsageComponent],
  imports: [
    CommonModule,
    UsageRoutingModule,
  ]
})
export class UsageModule { }

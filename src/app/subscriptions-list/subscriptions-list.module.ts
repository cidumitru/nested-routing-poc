import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionsListRoutingModule } from './subscriptions-list.routing-module';
import { SubscriptionsListComponent } from './subscriptions-list.component';



@NgModule({
  declarations: [
    SubscriptionsListComponent
  ],
  imports: [
    CommonModule,
    SubscriptionsListRoutingModule
  ]
})
export class SubscriptionsListModule { }

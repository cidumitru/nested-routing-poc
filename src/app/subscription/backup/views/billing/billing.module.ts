import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { BillingRoutingModule } from './billing.routing-module';
import { BillingViewComponent } from './billing-view/billing-view.component';
import { BillingCompareComponent } from './billing-compare/billing-compare.component';



@NgModule({
  declarations: [BillingComponent, BillingViewComponent, BillingCompareComponent],
  imports: [
    CommonModule,
    BillingRoutingModule,
  ]
})
export class BillingModule { }

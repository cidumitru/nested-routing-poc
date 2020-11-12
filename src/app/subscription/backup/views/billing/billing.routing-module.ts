import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing.component';
import { BillingViewComponent } from './billing-view/billing-view.component';
import { BillingCompareComponent } from './billing-compare/billing-compare.component';



const routes: Routes = [
  {
    path: '',
    component: BillingComponent,
    children: [
      {
        path: 'view',
        component: BillingViewComponent
      },
      {
        path: 'compare',
        component: BillingCompareComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillingRoutingModule { }

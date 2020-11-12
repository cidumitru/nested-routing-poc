import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BackupComponent } from './backup.component';



const routes: Routes = [
  {
    path: '',
    component: BackupComponent,
    children: [
      {
        path: 'billing',
        loadChildren: () => import('./views/billing/billing.module').then(m => m.BillingModule)
      },
      {
        path: 'usage',
        loadChildren: () => import('./views/usage/usage.module').then(m => m.UsageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackupRoutingModule { }

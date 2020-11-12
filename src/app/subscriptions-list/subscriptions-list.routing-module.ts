import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsListComponent } from './subscriptions-list.component';
import { BackupComponent } from '../subscription/backup/backup.component';




const routes: Routes = [
  {
    path: '',
    component: SubscriptionsListComponent,
    children: [
      {
        path: 'backup',
        loadChildren: () => import('../subscription/backup/backup.module').then(m => m.BackupModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsListRoutingModule { }

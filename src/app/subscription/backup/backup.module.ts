import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackupComponent } from './backup.component';
import { BackupRoutingModule } from './backup.routing-module';


@NgModule({
  declarations: [BackupComponent],
  imports: [
    CommonModule,
    BackupRoutingModule
  ]
})
export class BackupModule {
}

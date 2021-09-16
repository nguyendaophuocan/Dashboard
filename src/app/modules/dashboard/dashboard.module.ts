import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDashboardListComponent } from './components/view-dashboard-list/view-dashboard-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ViewDashboardListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
  ],
})
export class DashboardModule {}

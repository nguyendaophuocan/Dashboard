import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';

import { FooterComponent } from './components/footer/footer.component';

import { DefaultComponent } from './layouts/default/default.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';

import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatMenuModule } from '@angular/material/menu';

import { MatListModule } from '@angular/material/list';

import { MatDividerModule } from '@angular/material/divider';

import { MatButtonModule } from '@angular/material/button';

import { MatSidenavModule } from '@angular/material/sidenav';

import { MatCardModule } from '@angular/material/card';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './widget/card/card.component';
import { ColumnComponent } from './widget/column/column.component';
import { PieComponent } from './widget/pie/pie.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DefaultComponent,
    CardComponent,
    ColumnComponent,
    PieComponent,
  ],

  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatTableModule,
    RouterModule,
    MatCardModule,
    MatPaginatorModule,
    NgApexchartsModule,
  ],

  exports: [
    HeaderComponent,

    SidebarComponent,

    FooterComponent,

    DefaultComponent,
    CardComponent,
    ColumnComponent,
  ],
})
export class SharedModule {}

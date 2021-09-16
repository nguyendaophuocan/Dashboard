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

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DefaultComponent,
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
  ],

  exports: [
    HeaderComponent,

    SidebarComponent,

    FooterComponent,

    DefaultComponent,
  ],
})
export class SharedModule {}

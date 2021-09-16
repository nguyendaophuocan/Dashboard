import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { ViewRoomsListComponent } from './components/view-rooms-list/view-rooms-list.component';

@NgModule({
  declarations: [ViewRoomsListComponent],
  imports: [CommonModule, RoomsRoutingModule],
})
export class RoomsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OngsRoutingModule } from './ongs-routing.module';
import { OngsComponent } from './ongs.component';


@NgModule({
  declarations: [
    OngsComponent
  ],
  imports: [
    CommonModule,
    OngsRoutingModule
  ]
})
export class OngsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaghuRoutingModule } from './raghu-routing.module';
import { RaghuComponent } from './raghu/raghu.component';


@NgModule({
  declarations: [
    RaghuComponent
  ],
  imports: [
    CommonModule,
    RaghuRoutingModule
  ]
})
export class RaghuModule { }

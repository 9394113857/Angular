import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaghuComponent } from './raghu/raghu.component';

const routes: Routes = [
  {path:'raghu1', component:RaghuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaghuRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User1Component } from './user1/user1.component';

const routes: Routes = [
  {path:'user1', component:User1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

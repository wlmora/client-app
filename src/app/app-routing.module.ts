import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComponent } from './Client/get/get.component'
import { AddComponent } from './Client/add/add.component'

const routes: Routes = [
  { path: 'getClients', component: GetComponent },
  { path: 'addClient', component: AddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

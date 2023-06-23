import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EditComponent} from './component/product/edit/edit.component';
import {AddComponent} from './component/product/add/add.component';
import {ProductComponent} from './component/product/product.component';


const routes: Routes = [
  { path: 'edit/:id', component: EditComponent },
  { path: 'add', component: AddComponent },
  { path: '', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

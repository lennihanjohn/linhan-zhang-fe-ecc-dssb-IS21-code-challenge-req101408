import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ShareModule} from './share/share.module';
import {EditComponent} from './component/product/edit/edit.component';
import {AddComponent} from './component/product/add/add.component';
import {ProductComponent} from './component/product/product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    ProductComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ShareModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { StringifiedItemComponent } from './stringified-item/stringified-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    StringifiedItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

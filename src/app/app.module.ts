import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { StringifiedItemComponent } from './stringified-item/stringified-item.component';
import { ItemCollectionComponent } from './item-collection/item-collection.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CursorDetectorComponent } from './cursor-detector/cursor-detector.component';
import { MeterComponent } from './meter/meter.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    StringifiedItemComponent,
    ItemCollectionComponent,
    HomeComponent,
    CursorDetectorComponent,
    MeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

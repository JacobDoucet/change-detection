import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { StringifiedItemComponent } from './stringified-item/stringified-item.component';
import { PersonCollectionComponent } from './person-collection/person-collection.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CursorDetectorComponent } from './cursor-detector/cursor-detector.component';
import { MeterComponent } from './meter/meter.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    StringifiedItemComponent,
    PersonCollectionComponent,
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

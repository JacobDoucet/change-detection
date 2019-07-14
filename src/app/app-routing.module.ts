import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonCollectionComponent } from './person-collection/person-collection.component';
import { HomeComponent } from './home/home.component';
import { CursorDetectorComponent } from './cursor-detector/cursor-detector.component';

export const routes: Routes = [
  { path: 'person', component: PersonCollectionComponent, data: { title: 'Person' } },
  { path: 'cursor', component: CursorDetectorComponent, data: { title: 'Cursor Detector' } },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core/core';
import { Routes, RouterModule } from '@angular/router/router';
import { JeuxComponent } from './components/jeux/jeux.component';
import { AddComponent } from './components/add/add.component';
import { DetailDetailComponent } from './components/detail-detail/detail-detail.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-user' },
  { path: 'jeux', component: JeuxComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: DetailDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
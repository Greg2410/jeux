import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { JeuxComponent } from './components/jeux/jeux.component';
import { AddComponent } from './components/add/add.component';
import { DetailDetailComponent } from './components/detail-detail/detail-detail.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '', component: IndexComponent},
  { path: 'jeux', component: JeuxComponent },
  { path: 'add', component: AddComponent },
  { path: 'put/:id', component: DetailDetailComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
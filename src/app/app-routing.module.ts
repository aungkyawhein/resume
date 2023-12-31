import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: 'view', component: ViewComponent },
  { path: 'edit', component: EditComponent },
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: '**', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

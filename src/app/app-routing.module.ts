import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dash' },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

  { path: 'dash', loadChildren: () => import('./home/dashboard/dashboard.module').then(m => m.DashboardModule)},

  { path:'**', component:ErrorComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

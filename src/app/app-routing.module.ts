import { TableComponent } from './table/table.component';
import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'table', component:TableComponent},
  { path:'post/:variable', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';


import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path : '' , redirectTo: 'dashboard',pathMatch:'full'},
  {path: 'login' , component:LoginComponent},
  {path : 'dashboard' ,component:DashboardComponent},
  {path : 'create', component:CreateComponent},
  {path : 'update' , component:UpdateComponent},
  {path : 'update/:id' , component:UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

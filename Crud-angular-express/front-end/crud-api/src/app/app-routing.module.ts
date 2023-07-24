import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponentComponent } from './table-component/table-component.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { LoginComponentComponent } from './Auth-component/login-component/login-component.component';

const routes: Routes = [
  {path:"Authentification",component:LoginComponentComponent},
  {path:"Home",component:TableComponentComponent},
  {path:"addtask",component:FormComponentComponent},
  { path: '',redirectTo:'Authentification',pathMatch:'full'},
  { path: 'edittask/:myId',component:FormComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

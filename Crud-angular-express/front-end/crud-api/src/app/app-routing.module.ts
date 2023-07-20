import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponentComponent } from './table-component/table-component.component';
import { FormComponentComponent } from './form-component/form-component.component';

const routes: Routes = [
  {path:"home",component:TableComponentComponent},
  {path:"addtask",component:FormComponentComponent},
  { path: '',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

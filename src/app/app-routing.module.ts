import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { IndexComponent } from './users/index/index.component';
import { CreateComponent } from './users/create/create.component';
import { EditComponent } from './users/edit/edit.component';



const routes: Routes = [
  { path:'' , redirectTo:'login' , pathMatch:'full' },
  { path:'login' , component:LoginComponent },
  { path:'user',component:IndexComponent },
  { path:'user/create', component:CreateComponent },
  { path:'user/edit', component:EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  IndexComponent,
  CreateComponent,
  EditComponent
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StudentPageComponent } from './student-page/student-page.component';

const routes: Routes = [
  {path:"admin-login", component:AdminLoginComponent},
  {path:"student-login", component:StudentLoginComponent},
  {path:"main", component:MainComponent},
  {path:"admin-page", component:AdminPageComponent},
  {path:"student-page", component:StudentPageComponent},
  {path:"" , redirectTo:"/main",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponents=[AdminLoginComponent,StudentLoginComponent,MainComponent,AdminPageComponent,StudentPageComponent];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component'
import { TestqComponent } from './testq/testq.component';

const routes: Routes = [{
  path:'', component:SidemenuComponent,
  children:[
    {path:"Dashboard",component:DashboardComponent},
    {path:"",redirectTo:'/Onboard/Dashboard',pathMatch:'full'}
      ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardRoutingModule { }

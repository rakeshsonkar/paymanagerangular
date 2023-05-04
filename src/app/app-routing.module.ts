import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestcompComponent } from './testcomp/testcomp.component';
import { LoginComponent } from './login/login.component';

import {OnboardModule} from './Onboard/onboard.module'


const routes: Routes = [
  {
    path: 'Onboard',
    loadChildren: () => import('./Onboard/onboard.module').then(m => m.OnboardModule),
  },
  {path:'Test', component:TestcompComponent},
  
  {path:'', component:LoginComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

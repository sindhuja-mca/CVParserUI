/* Created by Christy 
Resume Parser project 
routing

*/

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
//import { LoginComponent } from './login/login.component';



export const AppRoutes: Routes = [
  {
    path: '',
    /*component: LoginComponent,*/
    children: [
	{
	   path: 'login',
      loadChildren: './login/login.module#LoginModule'
    },
    {
      path: 'resumeupload',
      loadChildren: './resumeupload/resumeupload.module#ResumeuploadModule'
    }
  ]
  
  }
];

/* Created by Christy 
Resume Parser project 
routing

*/

import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResumeuploadComponent } from './resumeupload/resumeupload.component';
//import { LoginComponent } from './login/login.component';



export const AppRoutes: Routes = [
{path: '',
    /*component: LoginComponent,*/
    children: [
    {
      path: 'resumeupload',
      loadChildren: './resumeupload/resumeupload.module#ResumeuploadModule'
    }
  ]
  
  }
];

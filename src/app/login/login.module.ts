import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginRoutes } from './login.routing';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
            CommonModule,
            RouterModule.forChild(LoginRoutes),
            FormsModule,
        ],
          
      declarations: [LoginComponent],
      providers: []
  })
  
  export class LoginModule {
  
  }
  
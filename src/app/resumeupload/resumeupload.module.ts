/* Created by Christy 
Resume Parser project 

*/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ResumeuploadComponent } from './resumeupload.component';
import { ResumeRoutes } from './resumeupload.routing';
import { CommonModule } from '@angular/common';
import { ResumeService } from './resume.service';
import { FilterPipe } from './filter.pipe';
//import { CandidateNamePipe } from "./CandidateNamePipe";
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
    imports: [
              CommonModule,
              RouterModule.forChild(ResumeRoutes),
              FormsModule,
              FileUploadModule          
            ],
          
      declarations: [ ResumeuploadComponent,
        FilterPipe
        //,CandidateNamePipe
      ],
      providers: [ResumeService]
  })
  
  export class ResumeuploadModule {
  
  }
  
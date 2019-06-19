/* Created by Christy 
Resume Parser project 

*/
import { Component, OnInit } from '@angular/core';
import { ResumeService } from './resume.service';
import {FilterPipe } from './filter.pipe';
import { FileLikeObject,FileUploader } from 'ng2-file-upload';
import { ConnectableObservable,Observable } from 'rxjs';

@Component({
  selector: 'app-resumeupload',
  templateUrl: './resumeupload.component.html',
  styleUrls: ['./resumeupload.component.scss']
})
export class ResumeuploadComponent implements OnInit {

  rowData:any[]=[];
  errorMessage:any;
  searchText:any;
  public show:boolean = false;
  public uploadStatus:boolean=false;

  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;


  constructor(private resumeService: ResumeService) { }  

  ngOnInit() {
  }

  fileOverBase(event):  void {
    this.hasBaseDropZoneOver  =  event;
}

getFiles(): FileLikeObject[] {
  return this.uploader.queue.map((fileItem) => {
    return fileItem.file;
  });
}


public convertDocCSV() 
{
  this.uploadStatus=!this.uploadStatus;
}

public convertPDFCSV() 
{
  this.uploadStatus=!this.uploadStatus;
}

  public parseResume() {
    this.show=!this.show;
    this.resumeService.parseResume()
      .subscribe(
        success => { this.rowData = success;   },
        error => { this.errorMessage = error;  });
  }

}

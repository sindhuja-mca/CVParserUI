import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ResumeService } from './resume.service';
import { FilterPipe } from './filter.pipe';
//import { CandidateNamePipe } from "./CandidateNamePipe";
import { FileLikeObject, FileUploader } from 'ng2-file-upload';
import { ConnectableObservable, Observable } from 'rxjs';

@Component({
  selector: 'app-resumeupload',
  templateUrl: './resumeupload.component.html',
  styleUrls: ['./resumeupload.component.scss']
})
export class ResumeuploadComponent implements OnInit {

  @Input() maxFiles: number = 5;
  @Input() fileExt: string = "DOC,DOCX,PDF";
  @Input() maxSize: number = 25;



  rowData: any[] = [];
  errorMessage: any;
  searchText: any;
  searchName: any;
  public show: boolean = false;
  public uploadStatus: boolean = false;
  public convertStatus: boolean = true;

  public errors: Array<string> = [];
  public uploadFilesUrl: string = "";
  public uploadParseUrl: string = "";
  paths = [];

  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver: boolean = false;
  message: string = '';

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
  }

  //file upload doc ,docx,pdf  event handling

  handleFileInput(event) {

    // let files: FileList = event.target.files;
    // console.log("Inside handle file>>>>" + files.length);
    // if ((files.length > 0) && (this.isValidFiles(files))) {
    //  this.uploadFiles = files;
    // }
    let files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      this.uploadFilesUrl = files[i].webkitRelativePath;      
    };
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.uploadFilesUrl = files[0].webkitRelativePath;
      //this.uploadFilesUrl = files[0].Path.GetFullPath();  
      //this.uploadFilesUrl = files[0].Path.getAbsolutePath();

      //this.uploadFilesUrl =Location.apply("this.uploadFilesUrl")
    }
    console.log("file path:" + this.uploadFilesUrl);
    this.uploadFilesUrl = "D:\\christy\\personal\\resume\\sample_resume";
  }

  public convertDocCSV(event) {
    this.uploadStatus = !this.uploadStatus;
    this.convertStatus = !this.convertStatus;
    this.resumeService.uploadFileService(this.uploadFilesUrl)
      .subscribe(
        success => {
          this.message = success;
          // this.uploadFiles = null;
          // this.myInputVariable.nativeElement.value = "";
        },
        error => { this.errorMessage = <any>error; }
      );

  }

  handleUploadInput(event) {

    // let files: FileList = event.target.files;
    // console.log("Inside handle file>>>>" + files.length);
    // if ((files.length > 0) && (this.isValidFiles(files))) {
    //  this.uploadFiles = files;
    // }
    let files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      this.uploadParseUrl = files[i].webkitRelativePath;
    };
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.uploadParseUrl += files[0].getAbsolutePath();
    }
    console.log("get absolute path:" + files[0]);
    this.uploadParseUrl="D:\\christy\\personal\\resume\\sample_resume\\Temp";
  }

  public parseUploadBtnClick(dir: string) {
    this.show=false;
    this.resumeService.uploadFileService(dir)
      .subscribe(
        success => {
		  this.errorMessage = "";
          this.rowData = success;
          console.log(this.rowData);
          alert("Successfully Uploaded!!")
          // this.uploadFiles = null;
          // this.myInputVariable.nativeElement.value = "";
        },
        error => { this.errorMessage = <any>error._body;
		console.log(error._body);
		}
      );

  }

    public getDetails(dir: string) {
    this.show=false;
    this.resumeService.getCandidateDetails(dir)
      .subscribe(
        success => {
		this.show=true;
		  this.errorMessage = "";
          this.rowData = success;
          console.log(this.rowData);
          alert("Successfully Uploaded!!")
          // this.uploadFiles = null;
          // this.myInputVariable.nativeElement.value = "";
        },
        error => { this.errorMessage = <any>error._body;
		console.log(error._body);
		}
      );

  }
  
  public parseResume() {
    this.show = !this.show;
    /* this.resumeService.parseResume()
      .subscribe(
        success => { this.rowData = success; },
        error => { this.errorMessage = error; }); */
  }





  /* uploadCVFiles() {
    
       this.resumeService.uploadFileService(this.uploadFilesUrl)
        .subscribe(
          success => {
           this.message = success; 
            // this.uploadFiles = null;
            // this.myInputVariable.nativeElement.value = "";
          },
          error => {  this.errorMessage = <any>error;  }
        );
    } */



  /* 
  
    //Only one file can be uploaded
    private isValidFiles(files) {
      // Check Number of files
      if (files.length > this.maxFiles) {
  
        return;
      }
      this.isValidFileExtension(files);
      return this.errors.length === 0;
    }
  
    isValidFileExtension(files) {
      // Make array of file extensions
      var extensions = (this.fileExt.split(','))
        .map(function (x) { return x.toLocaleUpperCase().trim() });
  
      for (var i = 0; i < files.length; i++) {
        // Get file extension
        var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
        // Check the extension exists
        // var exists = extensions.includes(ext);
  
        // Check file size
        this.isValidFileSize(files[i]);
      }
    }
  
  
    //validate File size
    private isValidFileSize(file) {
      var fileSizeinMB = file.size / (1024 * 1000);
      var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
      // if (size < 0 || size == null || size == undefined) {
      //   this.toastr.error("Error (File Size): " + file.name + ": file size limit is below the required limit" + "MB ( " + size + "MB )");
      // }
    }
  
  
  
  
    fileOverBase(event): void {
      this.hasBaseDropZoneOver = event;
    }
  
    getFiles(): FileLikeObject[] {
      return this.uploader.queue.map((fileItem) => {
        return fileItem.file;
      });
    }
   */



}

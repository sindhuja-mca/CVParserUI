/* Created by Christy 
Resume Parser project 
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
   constructor(private router:Router) {}
  title = 'Resume Parsing And Analytics Application ';
  ngOnInit() {
    this.router.navigate(['resumeupload'])
  }
}

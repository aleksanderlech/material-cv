import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from './services/data.service';
import { OnInit } from '@angular/core';
import { Resume } from "./services/resume.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  resume: Resume;

  constructor(private dataService: DataService) {}

  ngOnInit() {
      this.dataService.getData().subscribe(data => this.resume = data);
   }

}

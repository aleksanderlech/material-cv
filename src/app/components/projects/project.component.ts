import { Component, Input } from '@angular/core';
import { Project } from "../../services/resume.model";

@Component({
  selector: 'cv-project',
  templateUrl: './project.component.html'
})
export class ProjectComponent {

  @Input() project: Project;
}
import { Component, Input } from '@angular/core';
import { ProjectComponent } from './project.component';
import { NgModule } from '@angular/core';
import { Project } from "../../services/resume.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent {
  @Input() projects: Project[];
}

@NgModule({
  imports: [CommonModule],
  exports: [ProjectsComponent],
  declarations: [ProjectsComponent, ProjectComponent],
})
export class ProjectsModule {}
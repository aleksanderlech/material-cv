import { Component, Input } from '@angular/core';
import { InitiativeComponent } from './initiative.component';
import { NgModule } from '@angular/core';
import { Initiative } from "../../services/resume.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.scss']
})
export class InitiativesComponent {
  @Input() initiatives: Initiative[];
}

@NgModule({
  imports: [CommonModule],
  exports: [InitiativesComponent],
  declarations: [InitiativesComponent, InitiativeComponent],
})
export class InitiativesModule {}
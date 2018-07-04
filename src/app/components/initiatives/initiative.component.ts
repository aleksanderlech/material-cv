import { Component, Input } from '@angular/core';
import { Initiative } from "../../services/resume.model";

@Component({
  selector: 'cv-initiative',
  templateUrl: './initiative.component.html'
})
export class InitiativeComponent {

  @Input() initiative: Initiative;
}
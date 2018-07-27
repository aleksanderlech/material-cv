import { Input, Component } from '@angular/core';
import { Education } from '../../services/resume.model';

@Component({
  selector: 'cv-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() education: Education[];
}
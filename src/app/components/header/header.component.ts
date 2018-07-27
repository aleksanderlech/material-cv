import { Component, Input } from '@angular/core';
import { Profile } from "../../services/resume.model";

@Component({
  selector: 'cv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  @Input() profile: Profile;
}
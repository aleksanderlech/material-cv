import { Component, Input } from '@angular/core';
import { Contact } from "../../services/resume.model";

@Component({
  selector: 'cv-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  
  @Input() contact: Contact;
}
import { Component, Input } from '@angular/core';
import { Testimonial } from '../../services/resume.model';

@Component({
    selector: 'cv-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss'],
    standalone: false
})
export class TestimonialsComponent {
  
  @Input() testimonials: Testimonial[];
}
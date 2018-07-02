import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ProjectsModule } from './components/projects/projects.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SkillsComponent,
    EducationComponent,
    TestimonialsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ServicesModule,
    BrowserModule,
    ProjectsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

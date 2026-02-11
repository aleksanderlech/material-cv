declare var $: any;
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
    selector: 'cv-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    standalone: false
})
export class SkillsComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer: IntersectionObserver | null = null;
  private chartsInitialized = false;

  ngOnInit() {
    // Charts will be initialized when they become visible
  }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Trigger when 30% of the element is visible
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.chartsInitialized) {
          this.initializeCharts();
          this.chartsInitialized = true;
        }
      });
    }, options);

    const skillsSection = document.getElementById('skills-section');
    if (skillsSection) {
      this.observer.observe(skillsSection);
    }
  }

  private initializeCharts() {
    $('.chart').each(function() {
      const $chart = $(this);
      
      // Initialize chart with smooth settings
      $chart.easyPieChart({
        barColor: function(percent: number) {
          // Create a cyan to purple gradient
          const ctx = this.renderer.getCtx();
          const canvas = this.renderer.getCanvas();
          const size = canvas.width;
          const gradient = ctx.createLinearGradient(0, -size/2, size, size/2);
          gradient.addColorStop(0, '#00d4ff');    // Cyan
          gradient.addColorStop(0.5, '#7b2fff');  // Purple
          gradient.addColorStop(1, '#ff2daa');    // Pink
          return gradient;
        },
        trackColor: 'rgba(255, 255, 255, 0.08)',
        trackWidth: 4,
        scaleColor: false,
        lineWidth: 6,
        lineCap: 'round',
        size: 120,
        animate: {
          duration: 1500,
          enabled: true
        },
        onStep: function(from: number, to: number, currentPercent: number) {
          $(this.el).find('span').text(Math.round(currentPercent));
        }
      });
    });
  }
}

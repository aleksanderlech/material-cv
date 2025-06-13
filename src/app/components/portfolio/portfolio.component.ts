declare var $: any;
import { Input, Output, Component, OnInit } from '@angular/core';
import { Company } from '../../services/resume.model';

@Component({
    selector: 'cv-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    standalone: false
})
export class PortfolioComponent implements OnInit {

  @Input() companies: Company[];

  @Output() getSectors(): Set<String> {
    return new Set(this.companies.map(company => company.sector));
  }

  ngOnInit() {
    // Delay initialization to ensure the DOM is ready and images start loading
    setTimeout(() => {
      this.initializeIsotope();
    }, 100);
  }

  private initializeIsotope() {
    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    const $container = $('.isotope');
    
    // Wait for images to load before initializing Isotope
    $container.imagesLoaded(() => {
      // Initialize Isotope
      $container.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
      });
      
      // Add class to show items and force a layout refresh
      setTimeout(() => {
        $container.addClass('isotope-initialized');
        $container.isotope('layout');
      }, 200);
    });
    
    // filter items on click
    $('#filters').on('click', '.type', function() {
      const filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.filters').each(function(i, typeGroup) {
      const $typeGroup = $(typeGroup);
      $typeGroup.on('click', '.type', function() {
        $typeGroup.find('.active').removeClass('active');
        $(this).addClass('active');
      });
    });
  }
}
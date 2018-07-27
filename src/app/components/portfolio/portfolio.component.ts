declare var $: any;
import { Input, Output, Component, OnInit } from '@angular/core';
import { Company } from '../../services/resume.model';

@Component({
  selector: 'cv-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @Input() companies: Company[];

  @Output() getSectors(): Set<String> {
    return new Set(this.companies.map(company => company.sector));
  }

  ngOnInit() {
    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope    
    var $container = $('.isotope');
    
    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    });
    
    // filter items on click
    $('#filters').on( 'click', '.type', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    });
    
    // change is-checked class on buttons
    $('.filters').each( function( i, typeGroup ) {
        var $typeGroup = $( typeGroup );
        $typeGroup.on( 'click', '.type', function() {
        $typeGroup.find('.active').removeClass('active');
        $( this ).addClass('active');
        });
    });
  }
}
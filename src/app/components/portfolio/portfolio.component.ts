declare var $: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

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
declare var $: any;

import { Component, Output, EventEmitter } from '@angular/core';
import { DataService } from './services/data.service';
import { OnInit } from '@angular/core';
import { Resume } from "./services/resume.model";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements OnInit {

  resume: Resume;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.enableScrollSpy();
    this.dataService.getData().subscribe(data => this.resume = data);
  }

  private enableScrollSpy() {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({ target: '#page-nav-wrapper', offset: 100 });

    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function (e) {

      //store hash
      var target = this.hash;

      e.preventDefault();

      $('body').scrollTo(target, 800, { offset: -60, 'axis': 'y' });

    });

    /* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function () {

      $('#page-nav-wrapper').removeClass('fixed');

      var scrollTop = $(this).scrollTop();
      var topDistance = $('#page-nav-wrapper').offset().top;

      if ((topDistance) > scrollTop) {
        $('#page-nav-wrapper').removeClass('fixed');
        $('body').removeClass('sticky-page-nav');
      }
      else {
        $('#page-nav-wrapper').addClass('fixed');
        $('body').addClass('sticky-page-nav');
      }

    });
  }

}

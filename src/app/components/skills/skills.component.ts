declare var $: any;
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  ngOnInit() {
    $('.chart').easyPieChart({
      barColor: '#00BCD4',//Pie chart colour
      trackColor: '#e8e8e8',
      scaleColor: false,
      lineWidth: 5,
      animate: 2000,
      onStep: function (from, to, percent) {
        $(this.el).find('span').text(Math.round(percent));
      }
    });
  }
}
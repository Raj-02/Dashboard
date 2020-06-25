import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-cpu-utliz',
  templateUrl: './cpu-utliz.component.html',
  styleUrls: ['./cpu-utliz.component.scss']
})
export class CpuUtlizComponent implements OnInit {
  constructor() { }


  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      zoomType: 'x'
  },
  title: {
      text: 'CPU Utlization'
  },
  plotOptions: {
      area: {
          fillColor: {
              linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
              },
              stops: [
                  [0, Highcharts.getOptions().colors[0]],
              ]
          },
          marker: {
              radius: 2
          },
          lineWidth: 1,
          states: {
              hover: {
                  lineWidth: 1
              }
          },
          threshold: null
      }
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: true,
  },

    series: [{
      data: [1, 2, 3, 4, 5, 6, 5],
      type: 'area'
    }]
  };

  ngOnInit(): void {

    HC_exporting(Highcharts);
    setTimeout(() => { window.dispatchEvent(new Event('resize'));
}, 300);



}

}

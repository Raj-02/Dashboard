import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

name: string;

  constructor() { }

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  ngOnInit(): void {

    this.chartOptions = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Disk Space Data '
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        credits: {
            enabled: false
          },
          exporting: {
            enabled: true,
          },
        series: [{
            name: 'Space',
            colorByPoint: true,
            data: [{
                name: 'C drive',
                y: 500,
                sliced: true,
                selected: true
            }, {
                name: 'D drive',
                y: 300
            }, {
                name: 'E drive',
                y: 350
            }, {
                name: 'F drive',
                y: 400
            }]
        }]
 };
    HC_exporting(Highcharts);
    setTimeout(() => { window.dispatchEvent(new Event('resize'));
}, 300);
  }

}

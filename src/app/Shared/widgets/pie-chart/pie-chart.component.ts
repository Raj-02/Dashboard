import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  constructor() { }
  @Input() data: any = [];
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {  };

  ngOnInit(): void {
    this.chartOptions = {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Disk Space Usage'
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
          data: this.data,
          type: 'pie'
        }]

    };
    HC_exporting(Highcharts);
    setTimeout(() => { window.dispatchEvent(new Event('resize'));
}, 300);
  }

}

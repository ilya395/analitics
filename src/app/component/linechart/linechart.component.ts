import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ITableElement } from 'src/app/models/tables/table.model';

@Component({
  selector: 'custom-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.scss']
})
export class LinechartComponent implements OnInit {

  @Input() dataSource: ITableElement[] = [];
  @Input() displayedHeaders: string[] = [];

  Linechart: any = null;

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    console.log(this.dataSource.map(item => Number(item.saled)))
    this.Linechart = new Chart(
      'line-chart-types',
      {
        type: 'line',
        data: {
          labels: this.displayedHeaders,
          datasets: [{
            label: 'My First Dataset',
            data: this.dataSource.map(item => Number(item.saled)),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
      }
    );
    console.log(this.Linechart)
    // this.Linechart = new Chart('line-chart-types', {
    //   type: 'line',
    //   data: {
    //     labels: this.displayedHeaders,
    //     datasets: [
    //       {
    //         data: this.dataSource,
    //         borderColor: '#3cb371',
    //         backgroundColor: "#0000FF",
    //       }
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });
  }

}

import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IObjectTypesItem } from 'src/app/models/object-types/object-types.model';

@Component({
  selector: 'app-types-pie-chart',
  templateUrl: './types-pie-chart.component.html',
  styleUrls: ['./types-pie-chart.component.scss']
})
export class TypesPieChartComponent implements OnInit {

  dataSource: IObjectTypesItem[] = [];
  displayedHeaders: number[] = [];

  TypesPieChart: any = null;

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.TypesPieChart = new Chart(
      'types-pie-chart',
      {
        type: 'doughnut',
        data: {
          labels: this.displayedHeaders, // [1, 2, 3, 4],
          datasets: [{
            data: this.dataSource.map(item => item.number)
          }],
        }
      }
    );
  }

}

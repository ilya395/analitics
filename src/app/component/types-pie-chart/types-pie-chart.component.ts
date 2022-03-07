import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ERoomTypeKeys } from 'src/app/enums/types/type.enum';
import { IObjectTypesItem } from 'src/app/models/object-types/object-types.model';

@Component({
  selector: 'app-types-pie-chart',
  templateUrl: './types-pie-chart.component.html',
  styleUrls: ['./types-pie-chart.component.scss']
})
export class TypesPieChartComponent implements OnInit {

  @Input() dataSource: IObjectTypesItem[] = [];
  displayedHeaders: string[] | number [] = [];

  TypesPieChart: any = null;

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.displayedHeaders = [
      'Продано/рассрочка/оформ./на рег./зарег.',
      'Бронь',
      'Бронь застройщик + прочее',
      'Снято с продажи',
      'Продается',
    ];
    console.log(this.displayedHeaders, this.dataSource)
    this.TypesPieChart = new Chart(
      'types-pie-chart', // id in html
      { // config
        type: 'doughnut',
        data: {
          labels: this.displayedHeaders, // [1, 2, 3, 4],
          datasets: this.dataSource.map((item, index) => ({
            type: 'doughnut',
            data: item.list && item.list.map(item => item.number),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            label: `${index} rooms`
          })),
        },
        // options
        options: {
          plugins: {
            legend: {
              position: 'right',
            }
          }
        },
      },
    );
  }

}

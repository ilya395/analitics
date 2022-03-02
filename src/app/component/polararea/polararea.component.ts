import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IObjectTypesItem } from 'src/app/models/object-types/object-types.model';

@Component({
  selector: 'custom-polararea',
  templateUrl: './polararea.component.html',
  styleUrls: ['./polararea.component.scss']
})
export class PolarareaComponent implements OnInit {

  @Input() dataSource: IObjectTypesItem[] = [];
  @Input() displayedHeaders: number[] = [];

  Polararea: any = null;

  constructor() { }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.Polararea = new Chart(
      'polararea-chart-types',
      {
        type: 'polarArea',
        data: {
          labels: this.displayedHeaders, // x
          datasets: [{
            label: 'My First Dataset',
            data: this.dataSource.map(item => Number(item.number)) || [],
            borderColor: 'rgb(75, 192, 192)',
          }]
        },
      }
    );
  }

}

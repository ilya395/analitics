import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ITableElement } from 'src/app/models/tables/table.model';

@Component({
  selector: 'custom-polararea',
  templateUrl: './polararea.component.html',
  styleUrls: ['./polararea.component.scss']
})
export class PolarareaComponent implements OnInit {

  @Input() dataSource: ITableElement[] = [];
  @Input() displayedHeaders: string[] = [];

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
            data: this.dataSource.map(item => Number(item.saled)),
            borderColor: 'rgb(75, 192, 192)',
          }]
        },
      }
    );
  }

}

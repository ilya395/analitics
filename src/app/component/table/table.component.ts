import { Component, OnInit } from '@angular/core';
import { Input} from '@angular/core';
import { ITableElement } from 'src/app/models/tables/table.model';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() dataSource: ITableElement[] = [];
  @Input() displayedColumns: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

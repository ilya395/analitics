import { Component, OnInit } from '@angular/core';
import { ALL_PROJECTS, TEST_DATA_TYPES, TEST_DATA_TYPES_STATUS } from 'src/app/constants';
import { IProject } from 'src/app/models/projects/project.model';

@Component({
  selector: 'analitics',
  templateUrl: './analitics.component.html',
  styleUrls: ['./analitics.component.scss'],
})
export class AnaticsComponent implements OnInit {
  title = 'Страница аналитики';
  projects: IProject[] = ALL_PROJECTS;
  selectedProject: string | number | null | undefined = null;

  typesTableData = TEST_DATA_TYPES;
  typesTableHeaders = ['type', 'saled', 'balance', 'total'];

  typesPolarAreaData = TEST_DATA_TYPES_STATUS;
  typesPolarAreaHeaders = [1, 2, 3, 4, 5, 6]; // типы статусов

  ngOnInit() {
    this.selectedProject = this.projects[1].value;
    console.log(this.selectedProject)
  }
};
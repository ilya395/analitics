import { Component, OnInit } from '@angular/core';
import { ALL_PROJECTS, TEST_DATA_TYPES } from 'src/app/constants';
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

  ngOnInit() {
    this.selectedProject = this.projects[1].value;
    console.log(this.selectedProject)
  }
};
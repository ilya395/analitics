import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesPieChartComponent } from './types-pie-chart.component';

describe('TypesPieChartComponent', () => {
  let component: TypesPieChartComponent;
  let fixture: ComponentFixture<TypesPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesPieChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

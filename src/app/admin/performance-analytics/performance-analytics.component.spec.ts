import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAnalyticsComponent } from './performance-analytics.component';

describe('PerformanceAnalyticsComponent', () => {
  let component: PerformanceAnalyticsComponent;
  let fixture: ComponentFixture<PerformanceAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

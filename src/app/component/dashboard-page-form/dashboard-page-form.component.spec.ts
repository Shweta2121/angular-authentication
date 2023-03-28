import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageFormComponent } from './dashboard-page-form.component';

describe('DashboardPageFormComponent', () => {
  let component: DashboardPageFormComponent;
  let fixture: ComponentFixture<DashboardPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

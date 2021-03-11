import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresDashboardComponent } from './stores-dashboard.component';

describe('StoresDashboardComponent', () => {
  let component: StoresDashboardComponent;
  let fixture: ComponentFixture<StoresDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

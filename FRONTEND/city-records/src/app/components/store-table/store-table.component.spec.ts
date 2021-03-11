import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTableComponent } from './store-table.component';

describe('StoreTableComponent', () => {
  let component: StoreTableComponent;
  let fixture: ComponentFixture<StoreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

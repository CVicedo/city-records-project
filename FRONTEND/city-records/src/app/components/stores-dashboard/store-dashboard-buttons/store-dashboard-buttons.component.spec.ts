import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StoreDashboardButtonsComponent } from './store-dashboard-buttons.component'

describe('StoreDashboardButtonsComponent', () => {
  let component: StoreDashboardButtonsComponent
  let fixture: ComponentFixture<StoreDashboardButtonsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreDashboardButtonsComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDashboardButtonsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

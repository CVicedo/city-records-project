import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { HomeFormComponent } from './home-form.component'
import { RecordsService } from 'src/app/core/services/records.service'

describe('HomeFormComponent', () => {
  let component: HomeFormComponent
  let fixture: ComponentFixture<HomeFormComponent>
  let debugElement : DebugElement
  const RecordsService: RecordsService = null

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeFormComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('showTable should be false when displayTable is called with false argument', () => {
    component.displayTable(false)
    expect(component.showTable).toBe(false)
  })

  it('showTable should be true when displayTable is called with true argument', () => {
    component.displayTable(true)
    expect(component.showTable).toBe(true)
  })

  it('when some text is wroten in input, applyFilter should have been called', () => {
    debugElement = fixture.debugElement.query(By.css('input'))

    const spyFn = spyOn(component, 'applyFilter')

    debugElement.triggerEventHandler('keyup', {})

    expect(spyFn).toHaveBeenCalled()
  })

  it('when passRecordFromForm is called passRecord shouldbe called', () => {
    // Not working yet
    const spyFn = spyOn(RecordsService, 'passRecord')

    component.passRecordFromForm('string')

    expect(spyFn).toHaveBeenCalledWith('string')
  })
})

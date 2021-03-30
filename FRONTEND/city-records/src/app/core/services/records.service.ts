import { Injectable } from '@angular/core'
import { RecordList } from '../models/Records'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { BehaviorSubject, Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  selectedDisc: string
  storesFiltered = new BehaviorSubject([])
  isChecked = new BehaviorSubject(null)
  allShopsMapDataSource = new BehaviorSubject(true)

  private passRecordId = new Subject<string>();
  passRecordIdObservable = this.passRecordId.asObservable();

  passRecord (selectedDisc: string) {
    this.selectedDisc = selectedDisc
    this.passRecordId.next(selectedDisc)
  }

  getRecords (): Observable<RecordList[]> {
    return this.http.get<RecordList[]>(environment.URL_FETCH_RECORDS)
  }

  // TODO: refactor. May be can it be solved by populating?
  filterStores (recordId, stores) {
    const acumulator: any = []
    stores.map((element) => {
      element.records.map((elementTwo) => {
        if (elementTwo.record._id === recordId) {
          acumulator.push(element)
        }
        return acumulator
      })
      return acumulator
    })
    this.storesFiltered.next(acumulator)
  }

  switchRecordsDataSource () {
    this.isChecked.next(!this.isChecked.getValue())
  }

  createRecord (record: RecordList) {
    return this.http.post<RecordList[]>(environment.URL_FETCH_RECORDS, record).subscribe()
  }

  changeMapDataSource () {
    this.allShopsMapDataSource.next(this.allShopsMapDataSource ? !this.allShopsMapDataSource.getValue() : !this.allShopsMapDataSource.getValue())
    console.log('Service ', this.allShopsMapDataSource.getValue())
  }

  constructor (
    private http: HttpClient
  ) { }
}

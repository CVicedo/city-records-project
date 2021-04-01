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

  getLastRecord (): Observable<RecordList[]> {
    return this.http.get<RecordList[]>(environment.URL_FETCH_LAST_RECORD)
  }

  // TODO: refactor. May be can it be solved by populating?

  // Find stores wich have a specific record in it's inventory

  filterStores (recordId, stores) {
    const acumulator: any = []
    stores.map((store) => {
      store.records.map((record) => {
        if (record.record._id === recordId) {
          acumulator.push(store)
        }
        return acumulator
      })
      return acumulator
    })
    this.storesFiltered.next(acumulator)
  }

  // Switch value on isChecked in order to switch the store table datasource
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

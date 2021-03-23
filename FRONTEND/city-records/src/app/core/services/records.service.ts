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
  storesFiltered= new BehaviorSubject([])

  private passRecordId = new Subject<string>();
  passRecordIdObservable = this.passRecordId.asObservable();

  passRecord (selectedDisc: string) {
    // eslint-disable-next-line no-debugger
    debugger
    this.selectedDisc = selectedDisc
    this.passRecordId.next(selectedDisc)
  }

  getRecords (): Observable<RecordList[]> {
    return this.http.get<RecordList[]>(environment.URL_FETCH_RECORDS)
  }

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

  constructor (private http: HttpClient) { }
}

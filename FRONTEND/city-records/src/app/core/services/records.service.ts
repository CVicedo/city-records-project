import { Injectable } from '@angular/core'
import { RecordList } from '../models/Records'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  getRecords (): Observable<RecordList[]> {
    return this.http.get<RecordList[]>(environment.URL_FETCH_RECORDS)
  }

  constructor (private http: HttpClient) { }
}

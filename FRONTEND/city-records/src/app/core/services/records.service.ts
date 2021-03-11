import { Injectable } from '@angular/core'
import { Record } from '../models/Records'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  getRecords () {
    return this.http.get<Record[]>(environment.URL_FETCH_RECORDS)
  }

  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) { }
}

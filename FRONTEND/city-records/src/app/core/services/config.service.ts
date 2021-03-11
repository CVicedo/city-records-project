import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Store } from '../models/Stores'

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // eslint-disable-next-line no-useless-constructor
  constructor (private httpClient: HttpClient) { }

  getStores (): Observable<Store[]> {
    return this.httpClient.get<Store[]>('http://localhost:5000/api/records/stores')
  }
}

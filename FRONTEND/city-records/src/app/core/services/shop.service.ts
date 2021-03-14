import { Injectable } from '@angular/core'
import { Store } from '../models/Stores'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  getStores () {
    return this.http.get<Store[]>(environment.URL_FETCH_STORES)
  }

  // eslint-disable-next-line no-useless-constructor
  constructor (private http: HttpClient) { }
}

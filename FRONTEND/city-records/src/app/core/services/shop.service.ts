import { Injectable } from '@angular/core'
import { Store } from '../models/Stores'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  getStores () {
    return this.http.get<Store[]>(environment.URL_FETCH_STORES)
  }

  getStoresByUser (user) {
    return this.http.get<Store[]>(environment.URL_FETCH_STORES)
      .pipe(
        map((stores) => {
          return stores.filter((store) => store.email === user.email)
        })
      )
  }

  getStoresWithrecords (params) {
    return this.http.get<Store[]>(environment.URL_FETCH_STORES + `/${params}`)
  }

  constructor (private http: HttpClient) { }
}

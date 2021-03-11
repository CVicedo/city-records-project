import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../core/services/store.service'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  latitude = 41.3818
  longitude = 2.1685

  stores = this.StoreService.getStores()

  // eslint-disable-next-line no-useless-constructor
  constructor (private StoreService: StoreService) { }

  ngOnInit (): void {
    this.StoreService.getStores()
  }
}

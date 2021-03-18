import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../../../core/services/shop.service'
import { Store } from '../../../../core/models/Stores'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  latitude = 41.3818
  longitude = 2.1685

stores: Store[]

constructor (private StoreService: StoreService) { }

ngOnInit (): void {
  this.StoreService.getStores().subscribe(
    (storesArray) => {
      this.stores = storesArray
    }
  )
}
}

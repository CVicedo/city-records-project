import { Component, OnInit } from '@angular/core'
import { StoreService } from '../../../../core/services/shop.service'
import { RecordsService } from '../../../../core/services/records.service'
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
recordId: string
storesFiltered = this.RecordsService.storesFiltered

constructor (
  private StoreService: StoreService,
  public RecordsService: RecordsService
) { }

ngOnInit (): void {
  this.StoreService.getStores().subscribe(
    (storesArray) => {
      this.stores = storesArray
      this.RecordsService.filterStores(this.RecordsService.selectedDisc, this.stores)
    }
  )
}

AfterViewInit () {

}
}

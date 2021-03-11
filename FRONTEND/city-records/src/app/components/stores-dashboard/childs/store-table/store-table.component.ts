import { Component, OnInit } from '@angular/core'
import { RecordsService } from '../../../../core/services/records.service'

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.scss']
})
export class StoreTableComponent implements OnInit {
  records = this.RecordsService.getRecords()

  // eslint-disable-next-line no-useless-constructor
  constructor (private RecordsService: RecordsService) { }

  ngOnInit (): void {
    this.RecordsService.getRecords()
  }
}

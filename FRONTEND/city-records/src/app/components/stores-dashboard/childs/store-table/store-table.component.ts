import { Component, OnInit } from '@angular/core'
import { RecordsService } from '../../../../core/services/records.service'
import { RecordList } from '../../../../core/models/Records'
/* import { filter } from 'rxjs/operators' */

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.scss']
})

export class StoreTableComponent implements OnInit {
  columnsToDisplay: string[] = ['check', 'edit', 'artist', 'title', 'reference', 'format', 'mediaCondition', 'sleeveCondition', 'copies', 'price'];

  records = this.RecordsService.getRecords()

  recordFound: RecordList[];
  filterTerm: string

  onRowClicked (row) {
    console.log('Row Clicked: ', row)
  }

  /* Això és la part del filter */
  /*  filterRecords (name) {
    if (!name) {
      this.recordFound = []
    } else {
      this.recordFound = this.records.pipe(filter((record) => {
        return record.artist.toUpperCase().includes(name.toUpperCase())
      }))
    }
  } */

  // eslint-disable-next-line no-useless-constructor
  constructor (private RecordsService: RecordsService) { }

  ngOnInit (): void {

  }
}

import { Component, OnInit } from '@angular/core'
import { RecordsService } from '../../../../core/services/records.service'

@Component({
  selector: 'app-records-table',
  templateUrl: './records-table.component.html',
  styleUrls: ['./records-table.component.scss']
})
export class RecordsTableComponent implements OnInit {
  columnsToDisplay: string[] = ['check', 'edit', 'artist', 'title', 'reference', 'format', 'mediaCondition', 'sleeveCondition', 'copies', 'price'];

config: any;
records$

// eslint-disable-next-line no-useless-constructor
constructor (private RecordsService: RecordsService) {
  this.config = {
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: this.records$?.length
  }
}

pageChanged (event) {
  this.config.currentPage = event
}

ngOnInit () {
  this.RecordsService.getRecords().subscribe((element) => {
    this.records$ = element
    console.log(this.records$)
  })
}
}

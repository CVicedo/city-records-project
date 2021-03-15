import { Component, OnInit, ViewChild } from '@angular/core'
import { RecordsService } from '../../../../core/services/records.service'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { RecordList } from 'src/app/core/models/Records'

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.scss']
})

export class StoreTableComponent implements OnInit {
  columnsToDisplay: string[] = ['check', 'edit', 'artist', 'title', 'reference', 'format', 'mediaCondition', 'sleeveCondition', 'copies', 'price'];
  dataSource: MatTableDataSource<RecordList>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  onRowClicked (row) {
    console.log('Row Clicked: ', row)
  }

  constructor (private RecordsService: RecordsService) { }

  ngOnInit (): void {
    this.RecordsService.getRecords().subscribe((record) => {
      this.dataSource = new MatTableDataSource(record)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })
  }
}

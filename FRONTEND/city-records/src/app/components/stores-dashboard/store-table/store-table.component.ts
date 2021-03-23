import { Component, OnInit, ViewChild } from '@angular/core'
import { RecordsService } from '../../../core/services/records.service'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { RecordList } from 'src/app/core/models/Records'
import { SelectionModel } from '@angular/cdk/collections'
import { StoreService } from '../../../core/services/shop.service'
import { AuthService } from '@auth0/auth0-angular'
import { tap, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-store-table',
  templateUrl: './store-table.component.html',
  styleUrls: ['./store-table.component.scss']
})

export class StoreTableComponent implements OnInit {
  columnsToDisplay: string[] = ['select', 'edit', 'artist', 'title', 'reference', 'format', 'copies', 'price'];
  dataSource: MatTableDataSource<RecordList>;
  selection = new SelectionModel<RecordList>(true, []);
  allStores: any
  user: any
  records: any
  recordsToShow: MatTableDataSource<RecordList>;
  shopLogged: any
  shop: any

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected () {
    const numSelected = this.selection.selected.length
    const numRows = this.dataSource.data.length
    return numSelected === numRows
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle () {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row))
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel (row?: RecordList): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`
    }
    return (`${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.reference}`)
  }

  /** Filters records array in order to show only the ones in the record stor inventary */
  filterInventoryRecords (email, stores) {
    stores.map((element) => {
      if (element.email === email) {
        this.shopLogged = element
      }
      return this.shopLogged
    })
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  /* Filters row taking all the row data as a string */
  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  /* Displays in console row info when clicked */
  onRowClicked (row) {
    console.log('Row Clicked: ', row)
  }

  constructor (
    private RecordsService: RecordsService,
    private StoreService: StoreService,
    public auth: AuthService
  ) { }

  ngOnInit (): void {
    // eslint-disable-next-line no-debugger
    debugger
    this.RecordsService.getRecords().subscribe((record) => {
      this.dataSource = new MatTableDataSource(record)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
    })

    // Get the complete stores array
    this.auth.user$
      .pipe(
        tap(user => { this.user = user.email }),
        switchMap(user => this.StoreService.getStoresByUser(user)),
        tap((stores) => {
          // eslint-disable-next-line no-debugger
          debugger
          this.allStores = stores
          const records = stores[0].records.reduce((acc, { record }) => [...acc, record], [])
          this.recordsToShow = new MatTableDataSource(records)
        })
      )
      .subscribe()

    // Get the user's e-mail
    this.auth.user$.subscribe((element) => { this.user = element.email })

    this.filterInventoryRecords(this.user, this.allStores)
  }
}

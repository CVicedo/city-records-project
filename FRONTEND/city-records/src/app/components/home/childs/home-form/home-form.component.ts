import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RecordList } from 'src/app/core/models/Records'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { RecordsService } from '../../../../core/services/records.service'
import { SelectionModel } from '@angular/cdk/collections'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.scss']
})
export class HomeFormComponent implements OnInit {
columnsToDisplay: string[] = ['artist', 'title', 'reference', 'format', 'copies', 'price'];
  dataSource: MatTableDataSource<RecordList>;
  selection = new SelectionModel<RecordList>(true, []);
  showTable :boolean = false;
  rowString: string = ''
  stringToShow: string

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('input') Input: ElementRef

  /* Filters row taking all the row data as a string */
  applyFilter (event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  displayTable () {
    this.showTable = true
  }

  hideTable () {
    this.showTable = false
  }

  changePlaceholder (objectToDisplay) {
    this.stringToShow = `${objectToDisplay.artist}, ${objectToDisplay.title}
    Ref: ${objectToDisplay.reference} Format: ${objectToDisplay.format}`

    this.Input.nativeElement.value = this.stringToShow
  }

  constructor (private RecordsService: RecordsService) { }

  ngOnInit (): void {
    this.RecordsService.getRecords().subscribe((record) => {
      this.dataSource = new MatTableDataSource(record)
      this.dataSource.sort = this.sort
    })
  }
}

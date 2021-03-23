import { Component, OnInit } from '@angular/core'
import { RecordsService } from 'src/app/core/services/records.service'

@Component({
  selector: 'app-stores-dashboard',
  templateUrl: './stores-dashboard.component.html',
  styleUrls: ['./stores-dashboard.component.scss']
})
export class StoresDashboardComponent implements OnInit {
  constructor (private RecordsService: RecordsService) { }
  isChecked = this.RecordsService.isChecked.subscribe((element) => { this.isChecked = element })

  ngOnInit (): void {

  }
}

import { HostListener, Component, OnInit } from '@angular/core'
import { RecordsService } from 'src/app/core/services/records.service'

@Component({
  selector: 'app-store-dashboard-buttons',
  templateUrl: './store-dashboard-buttons.component.html',
  styleUrls: ['./store-dashboard-buttons.component.scss']
})
export class StoreDashboardButtonsComponent implements OnInit {
  isChecked = this.RecordsService.isChecked
  constructor (private RecordsService: RecordsService) { }

  @HostListener('click')
  callService () {
    this.RecordsService.switchRecordsDataSource()
  }

  ngOnInit (): void {
  }
}

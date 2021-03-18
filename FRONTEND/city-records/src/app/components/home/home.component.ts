import { Component, OnInit } from '@angular/core'
import { RecordsService } from 'src/app/core/services/records.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // eslint-disable-next-line no-useless-constructor
  constructor (public RecordsService: RecordsService) { }

  ngOnInit (): void {
  }
}

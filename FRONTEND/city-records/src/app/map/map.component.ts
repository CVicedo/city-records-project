import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  latitude = 41.3818
  longitude = 2.1685

  constructor () { }

  ngOnInit (): void {
  }
}

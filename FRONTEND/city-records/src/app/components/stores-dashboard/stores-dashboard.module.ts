import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'

import { StoresDashboardComponent } from '../stores-dashboard/stores-dashboard.component'
import { StoreTableComponent } from './childs/store-table/store-table.component'
import { StoreDashboardButtonsComponent } from './childs/store-dashboard-buttons/store-dashboard-buttons.component'

@NgModule({
  declarations: [
    StoresDashboardComponent,
    StoreTableComponent,
    StoreDashboardButtonsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class StoresDashboardModule { }

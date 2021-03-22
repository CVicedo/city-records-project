import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatButtonModule } from '@angular/material/button'

import { StoresDashboardComponent } from '../stores-dashboard/stores-dashboard.component'
import { StoreTableComponent } from './store-table/store-table.component'
import { StoreDashboardButtonsComponent } from './store-dashboard-buttons/store-dashboard-buttons.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { NavComponent } from '../nav/nav.component'
import { AppRoutingModule } from '../../app-routing.module'

@NgModule({
  declarations: [
    StoresDashboardComponent,
    StoreTableComponent,
    StoreDashboardButtonsComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoresDashboardModule { }

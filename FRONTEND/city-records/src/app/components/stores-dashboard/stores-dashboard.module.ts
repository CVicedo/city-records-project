import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatButtonModule } from '@angular/material/button'

import { StoresDashboardComponent } from '../stores-dashboard/stores-dashboard.component'
import { StoreTableComponent } from './childs/store-table/store-table.component'
import { StoreDashboardButtonsComponent } from './childs/store-dashboard-buttons/store-dashboard-buttons.component'
import { AppRoutingModule } from 'src/app/app-routing.module'
import { MatCheckboxModule } from '@angular/material/checkbox'

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
    MatButtonModule,
    AppRoutingModule,
    MatCheckboxModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoresDashboardModule { }

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { StoresDashboardComponent } from '../stores-dashboard/stores-dashboard.component'
import { StoreTableComponent } from './childs/store-table/store-table.component'
import { StoreDashboardButtonsComponent } from './childs/store-dashboard-buttons/store-dashboard-buttons.component'
import { AppRoutingModule } from 'src/app/app-routing.module'

@NgModule({
  declarations: [
    StoresDashboardComponent,
    StoreTableComponent,
    StoreDashboardButtonsComponent,
    BrowserModule

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class StoresDashboardModule { }

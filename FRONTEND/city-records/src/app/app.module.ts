import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { MapComponent } from './components/home/childs/map/map.component'
import { HomeFormComponent } from './components/home/childs/home-form/home-form.component'
import { HomeContentComponent } from './components/home/childs/home-content/home-content.component'
import { FooterComponent } from './components/footer/footer.component'
import { HomeComponent } from './components/home/home.component'
import { StoresDashboardComponent } from './components/stores-dashboard/stores-dashboard.component'
import { StoreTableComponent } from './components/stores-dashboard/childs/store-table/store-table.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    HomeFormComponent,
    HomeContentComponent,
    FooterComponent,
    HomeComponent,
    StoresDashboardComponent,
    StoreTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_MAPS_KEY
    }),
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

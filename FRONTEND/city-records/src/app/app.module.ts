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

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { MapComponent } from './components/map/map.component'
import { HomeFormComponent } from './components/home-form/home-form.component'
import { HomeContentComponent } from './components/home-content/home-content.component'
import { FooterComponent } from './components/footer/footer.component'
import { StoreTableComponent } from './components/store-table/store-table.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    HomeFormComponent,
    HomeContentComponent,
    FooterComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core'

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { MapComponent } from './map/map.component'
import { HomeFormComponent } from './home-form/home-form.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { HomeContentComponent } from './home-content/home-content.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    HomeFormComponent,
    HomeContentComponent,
    FooterComponent
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

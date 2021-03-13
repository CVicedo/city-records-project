import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AgmCoreModule } from '@agm/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'

import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { HomeModule } from './components/home/home.module'
import { StoresDashboardModule } from './components/stores-dashboard/stores-dashboard.module'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_MAPS_KEY
    }),
    HttpClientModule,
    HomeModule,
    StoresDashboardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

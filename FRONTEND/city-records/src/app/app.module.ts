import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AgmCoreModule } from '@agm/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { MatTableModule } from '@angular/material/table'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { HomeModule } from './components/home/home.module'
import { StoresDashboardModule } from './components/stores-dashboard/stores-dashboard.module'
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component'

import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { PostRecordsForm } from './components/post-records-form/post-records-form.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { AuthModule } from '@auth0/auth0-angular'
import { NotFoundComponent } from './components/not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HowItWorksComponent,
    PostRecordsForm,
    SignUpComponent,
    NotFoundComponent

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
    StoresDashboardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    AuthModule.forRoot({
      domain: 'projectsblabla.eu.auth0.com',
      clientId: 'AX2qRp6e3Don5wQO0Un6Oa7cia9ynMbm',
      cacheLocation: 'localstorage',
      useRefreshTokens: true
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

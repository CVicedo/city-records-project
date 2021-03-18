import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core'
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { environment } from '../../../environments/environment'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AutocompleteLibModule } from 'angular-ng-autocomplete'
import { FormsModule } from '@angular/forms'
import { MatTableModule } from '@angular/material/table'

import { HomeComponent } from './home.component'
import { MapComponent } from './childs/map/map.component'
import { HomeFormComponent } from './childs/home-form/home-form.component'
import { HomeContentComponent } from './childs/home-content/home-content.component'

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    HomeFormComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    GoogleMapsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.API_MAPS_KEY
    }),
    MatAutocompleteModule,
    AutocompleteLibModule,
    FormsModule,
    MatTableModule
  ]

})
export class HomeModule { }

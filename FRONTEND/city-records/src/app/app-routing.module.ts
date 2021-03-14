import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { StoresDashboardComponent } from './components/stores-dashboard/stores-dashboard.component'
import { HowItWorksComponent } from './components/info/how-it-works/how-it-works.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StoresDashboardComponent },
  { path: 'how-it-works', component: HowItWorksComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

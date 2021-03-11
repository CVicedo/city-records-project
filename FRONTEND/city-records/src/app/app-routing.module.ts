import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { StoresDashboardComponent } from './components/stores-dashboard/stores-dashboard.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StoresDashboardComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

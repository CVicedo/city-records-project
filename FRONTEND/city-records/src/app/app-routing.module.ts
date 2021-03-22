import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { StoresDashboardComponent } from './components/stores-dashboard/stores-dashboard.component'
import { HowItWorksComponent } from './components/info/how-it-works/how-it-works.component'
import { SignInComponent } from './components/sign-in/sign-in.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StoresDashboardComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

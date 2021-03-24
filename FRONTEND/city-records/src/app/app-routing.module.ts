import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { StoresDashboardComponent } from './components/stores-dashboard/stores-dashboard.component'
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component'
import { PostRecordsForm } from './components/post-records-form/post-records-form.component'
import { SignUpComponent } from './components/sign-up/sign-up.component'
import { NotFoundComponent } from './components/not-found/not-found.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'store', component: StoresDashboardComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'create-record', component: PostRecordsForm },
  { path: 'sign-up', component: SignUpComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

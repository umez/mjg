import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { compileComponentFromMetadata } from '@angular/compiler';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full' },
  {path: 'contact', component: ContactComponent},
  { path: '**', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

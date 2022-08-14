import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbouteMeComponent } from './aboute-me/aboute-me.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyResumeComponent } from './my-resume/my-resume.component';

const routes: Routes = [
  {path: '', component: AbouteMeComponent},
  {path: 'my-resume', component: MyResumeComponent},
  {path: 'my-portfolio', component: MyPortfolioComponent},
  {path: 'my-contact', component: MyContactComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AbouteMeComponent } from './aboute-me/aboute-me.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { MyPortfolioComponent } from './my-portfolio/my-portfolio.component';
import { MyContactComponent } from './my-contact/my-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    AbouteMeComponent,
    MyResumeComponent,
    MyPortfolioComponent,
    MyContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

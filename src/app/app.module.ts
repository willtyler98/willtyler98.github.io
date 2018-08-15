import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { ParticlesComponent } from './particles/particles.component';
import { LinksComponent } from './links/links.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './/app-routing.module';
import { PreviewComponent } from './preview/preview.component';


@NgModule({
  declarations: [
    AppComponent,
    ParticlesComponent,
    LinksComponent,
    SideNavigationComponent,
    ResumeComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { ParticlesComponent } from './particles/particles.component';
import { LinksComponent } from './links/links.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ParticlesComponent,
    LinksComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

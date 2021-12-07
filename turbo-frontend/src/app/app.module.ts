import { SharedModule } from './shared/modules/shared.module';
import { CarsCardComponent } from './components/cars-card/cars-card.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CarsCardComponent,
    HomeComponent,
    NavbarComponent,
    SocialIconsComponent,
    FilterPanelComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

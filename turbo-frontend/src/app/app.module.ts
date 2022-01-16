import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
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
import { LatestPostsComponent } from './components/latest-posts/latest-posts.component';
import { MostViewedComponent } from './components/most-viewed/most-viewed.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsCardComponent,
    HomeComponent,
    NavbarComponent,
    SocialIconsComponent,
    FilterPanelComponent,
    LatestPostsComponent,
    MostViewedComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent
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

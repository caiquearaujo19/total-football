import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './pages/home/home.component';
import { InitialScreenComponent } from './pages/initial-screen/initial-screen.component';
import { MenuCardComponent } from './components/menu-card/menu-card.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { StateChampionshipsComponent } from './pages/state-championships/state-championships.component';
import { CarrerComponent } from './pages/carrer/carrer.component';
import { BrasileiraoComponent } from './pages/brasileirao/brasileirao.component';
import { KickOffComponent } from './pages/kick-off/kick-off.component';
import { TeamSelectorComponent } from './components/team-selector/team-selector.component';
import { LevelStarsComponent } from './components/level-stars/level-stars.component';
import { TeamPhaseComponent } from './components/team-phase/team-phase.component';
import { SerieAComponent } from './pages/serie-a/serie-a.component';
import { SerieBComponent } from './pages/serie-b/serie-b.component';
import { SerieCComponent } from './pages/serie-c/serie-c.component';
import { SerieDComponent } from './pages/serie-d/serie-d.component';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HomeComponent,
    InitialScreenComponent,
    MenuCardComponent,
    TournamentsComponent,
    PageHeaderComponent,
    StateChampionshipsComponent,
    CarrerComponent,
    BrasileiraoComponent,
    KickOffComponent,
    TeamSelectorComponent,
    LevelStarsComponent,
    TeamPhaseComponent,
    SerieAComponent,
    SerieBComponent,
    SerieCComponent,
    SerieDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

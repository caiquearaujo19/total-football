import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InitialScreenComponent } from './pages/initial-screen/initial-screen.component';
import { HomeComponent } from './pages/home/home.component';
import { KickOffComponent } from './pages/kick-off/kick-off.component';
import { CarrerComponent } from './pages/carrer/carrer.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { StateChampionshipsComponent } from './pages/state-championships/state-championships.component';
import { BrasileiraoComponent } from './pages/brasileirao/brasileirao.component';
import { SerieAComponent } from './pages/serie-a/serie-a.component';
import { SerieBComponent } from './pages/serie-b/serie-b.component';
import { SerieCComponent } from './pages/serie-c/serie-c.component';
import { SerieDComponent } from './pages/serie-d/serie-d.component';
import { TeamManagementComponent } from './pages/team-management/team-management.component';
import { TeamsService } from './services/teams/teams.service';

const routes: Routes = [
  {
    path: '',
    component: InitialScreenComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'kick-off',
    component: KickOffComponent
  },
  {
    path: 'carrer',
    component: CarrerComponent
  },
  {
    path: 'tournaments',
    component: TournamentsComponent
  },
  {
    path: 'tournaments/state-championships',
    component: StateChampionshipsComponent
  },
  {
    path: 'tournaments/brasileirao',
    component: BrasileiraoComponent
  },
  {
    path: 'tournaments/brasileirao/serie-a',
    component: SerieAComponent
  },
  {
    path: 'tournaments/brasileirao/serie-b',
    component: SerieBComponent
  },
  {
    path: 'tournaments/brasileirao/serie-c',
    component: SerieCComponent
  },
  {
    path: 'tournaments/brasileirao/serie-d',
    component: SerieDComponent
  },
  {
    path: 'team-management/:teamId',
    component: TeamManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

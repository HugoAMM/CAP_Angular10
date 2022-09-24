import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './players.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '',
  component: PlayersComponent
  },
  {
    path:'player',
    component: PlayerComponent
  },
  {
    path:'player/:id',
    component: PlayerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayersRoutingModule { }

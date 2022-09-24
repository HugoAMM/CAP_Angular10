import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import {MatButtonModule} from '@angular/material/button';
import { PlayerComponent } from './player/player.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms'
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from "@angular/material/icon";



@NgModule({
  declarations: [
    PlayersComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule
  ]
})
export class PlayersModule { }

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Player } from 'src/app/model/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  dataSource: MatTableDataSource<Player> = new MatTableDataSource<Player>();
  displayedColumns = ['id', 'name', 'nationality', 'debutTeam', 'position', 'actualTeam', 'edit']

  constructor(private playerService: PlayerService) {
    this.loadPlayers();
   }

  ngOnInit(): void {
  }

  loadPlayers(): void{
    this.playerService.getPlayers().subscribe({
      next: (players) => {
        this.dataSource.data = players;
      },
      error: (err) => {
        alert('Error')
      }
    })
  }

}

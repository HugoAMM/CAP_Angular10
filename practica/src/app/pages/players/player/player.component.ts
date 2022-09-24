import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Player } from 'src/app/model/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  title = '';
  idPlayer?: number;
  formPlayer?: FormGroup;

  constructor(private db: FormBuilder,
    private playerService:PlayerService,
    private router:Router,
    private activateRoute: ActivatedRoute)
    {
      this.formPlayer = this.db.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      nationality: ['', Validators.required],
      debutTeam: ['', Validators.required],
      position: ['', Validators.required],
      actualTeam: ['', Validators.required],
    });

    this.activateRoute.params.subscribe({
      next: (params) =>{
        if(params['id']) {
          this.idPlayer = params['id'];
          this.title = 'Editar Jugador';
          this.loadPlayer();
        }else {
          this.title = "Registrar Jugador"
        }
      }
    })
  }

  ngOnInit(): void {}

  loadPlayer(): void{
    if(this.idPlayer){
      this.playerService.getPlayer(this.idPlayer).subscribe({
        next: (player) =>{
          this.formPlayer?.patchValue(player);
        },
        error: () => {
          alert('Error Player')
        },
      });
    };
  };

  save(): void {
    const player: Player = this.formPlayer?.value as Player;
    if(this.idPlayer){
      this.playerService.editPlayer(player, this.idPlayer).subscribe({
        next: () =>{
          this.router.navigateByUrl('/players');
        },
        error: () => {
          alert('Error')
        },
      });
    }else{
      this.playerService.postPlayer(player).subscribe({
        next: () => {
          this.router.navigateByUrl('/players')
        },
        error: () => {
          alert('Error')
        },
      });
    };
  };
};

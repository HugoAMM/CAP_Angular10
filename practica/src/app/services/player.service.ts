import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
import { Observable } from 'rxjs';
import { Player } from '../model/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>('http://localhost:3000/players');
  }

  getPlayer(id: number): Observable<Player>{
    return this.http.get<Player>('http://localhost:3000/players/' + id);
  }

  postPlayer(player : Player): Observable<Player>{
    return this.http.post<Player>('http://localhost:3000/players', player);
  }
  editPlayer(player: Player, id: number): Observable<Player>{
    return this.http.put<Player>('http://localhost:3000/players/' + id, player);
  }

}

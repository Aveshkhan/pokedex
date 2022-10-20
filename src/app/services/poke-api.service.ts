import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Config } from '../model/config';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(
    private http: HttpClient,
    private CONSTANT: Config
  ) { }

  getAllPokemon(): Observable<any>{
    const URL = environment.pokeApiURL + this.CONSTANT.POKEMONAPI
    return this.http.get(URL)
  }

  getAllMorePokemon( url ): Observable<any>{
    const URL = environment.pokeApiURL + url;
    return this.http.get(URL)
  }

  getPokemonDetailByIdOrName(value): Observable<any>{
    const URL = environment.pokeApiURL + this.CONSTANT.POKEMONAPI + "/" + value;
    return this.http.get(URL)
  }
}

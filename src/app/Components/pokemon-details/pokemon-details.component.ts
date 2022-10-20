import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokeApiService } from 'src/app/services/poke-api.service';
import {Location, NumberFormatStyle} from '@angular/common';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  pokemonDetail: any;
  pokemonId: any;
  pokemonName: any;
  pokemonWeight: any;
  pokemonHeight: any;
  pokemonSpecialMove: any;
  pokemonImg: any;
  pokemonImg2: any;
  pokemonImg3: any;
  pokemonTypes: any;
  pokeomtype: any;
  pokemonBaseStats: any;
  colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
    default: '#212529',
  };

  constructor(
    private PokeService: PokeApiService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    const value = this.activatedRoute.snapshot.paramMap.get("id")
    console.log(value)
    this.getPokemonDetails(value)
  }

   getPokemonDetails(value){
    this.PokeService.getPokemonDetailByIdOrName(value).subscribe((response) => {
      if(response){
        this.pokemonDetail = response;
        this.pokemonId = response.id;
        this.pokemonName = response.name;
        this.pokemonWeight = response.weight;
        this.pokemonHeight = response.height;
        this.pokemonImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + response.id + ".png";
        this.pokemonImg2 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + response.id + ".png";
        this.pokemonImg3 = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + response.id + ".svg";
        this.pokemonTypes = response.types
        this.pokemonBaseStats = response.stats;
        this.pokeomtype = response.types[0].type.name
        this.pokemonSpecialMove = response.moves[0].move.name;
        console.log(this.pokeomtype);

      }
    })
  }

  nextPokemon(){
    const nextPokemonId =  this.pokemonId + 1;
    // console.log(nextPokemonId)
    this.route.navigate(['pokemon-details', nextPokemonId ]);
    this.getPokemonDetails(nextPokemonId)
  }

  previousPokemon(){
    const nextPokemonId =  this.pokemonId - 1;
    // console.log(nextPokemonId)
    this.route.navigate(['pokemon-details', nextPokemonId ]);
    this.getPokemonDetails(nextPokemonId)
  }

  backButton(){
    const value = this.activatedRoute.snapshot.paramMap.get("id")
    if(value == this.pokemonName){
      this._location.back();
    } else{
      this.route.navigate([''])
    }
  }


}

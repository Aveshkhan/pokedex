import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-pokemon-generations',
  templateUrl: './pokemon-generations.component.html',
  styleUrls: ['./pokemon-generations.component.scss']
})
export class PokemonGenerationsComponent implements OnInit {

  generations: any = [];
  a: string;
  genId: any = 1;
  pokemonGenListArray: any = [];
  pokemonListArray: { pokemonArray: any, imgId: string }[] = [];


  constructor(
    private PokeService: PokeApiService,
  ) { }

  ngOnInit(): void {
    this.getPokemonGeneration();
    this.getPokemonDataByGen();
  }

  getPokemonGeneration() {
    this.PokeService.getPokemonGen().subscribe((response) => {
      if (response) {
        this.generations = response.results
        console.log(this.generations)
      }
    })
  }


  getPokemonDataByGen() {
    this.PokeService.getPokemonsByGen(this.genId).subscribe((response) => {
      if (response) {
        this.pokemonGenListArray = response.pokemon_species
        console.log(this.pokemonGenListArray)
        this.pokemonGenListArray.forEach((element) => { this.pokemonListArray.push({ pokemonArray: element, imgId: element.url.slice(41, -1).replace('/', '') }) })
        console.log(this.pokemonListArray)
      }
    })
  }

  getPokemonByGen(item) {
    this.a = item
    let b = this.a.slice(37).replace('/', '')
    if(this.genId !== b){
      this.genId = b
      this.pokemonListArray = []
      this.getPokemonDataByGen()
    }
  }

}

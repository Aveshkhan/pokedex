import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokeApiService } from 'src/app/services/poke-api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {

  page: number = 20;
  pagesize: number = 0;
  currentPage: number = 0;
  nextURL: any;
  pokemon$: Observable<any>;
  selectedId: number;

  constructor(
    private PokeService: PokeApiService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  pokemonListArray: { pokemonArray: any, imgId: any }[] = [];
  ImageURL: any = []

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    if (this.pokemonListArray.length) {
      this.PokeService.getAllMorePokemon(this.nextURL).subscribe((Response) => {
        if (Response) {
          this.nextURL = Response.next.slice(25);
          console.log(this.nextURL)
          Response.results.forEach((element) => { this.pokemonListArray.push({ pokemonArray: element, imgId: element.url.slice(34).replace('/', '') }) })
          console.log(this.pokemonListArray)
        }
      })
    } else {
      this.PokeService.getAllPokemon().subscribe((Response) => {
        if (Response) {
          this.nextURL = Response.next.slice(25);
          console.log(this.nextURL)
          Response.results.forEach((element) => { this.pokemonListArray.push({ pokemonArray: element, imgId: element.url.slice(34).replace('/', '') }) })
          console.log(this.pokemonListArray)
        }
      }, (Error) => {
        console.log("error while calling getAllPokemon" + Error)
      })
    }
  }

  loadmorePokemons(event) {
    this.currentPage = event;
    this.pagesize = this.pagesize + 20;
    if (this.pokemonListArray.length) {
      this.pokemonListArray = []
    }
  }
}

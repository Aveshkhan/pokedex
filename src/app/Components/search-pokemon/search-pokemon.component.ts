import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokeApiService } from 'src/app/services/poke-api.service';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {
  searchForm: FormGroup;
  searchValue : any;
  submitted: Boolean = false;
  searchedPokemon: any;
  pokemonName: any;
  pokemonId: any;
  pokemonImg: any;
  dataNotFound: any = "No Data to Display";

  constructor(
    private PokeService: PokeApiService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private _location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required],
    })
  }

  onSubmit(){
    this.submitted = true;
    if(this.searchForm.valid){
      this.searchValue = this.searchForm.value.search
      this.searchPokemon(this.searchValue)
    } else{
      return
    }
  }

  searchPokemon(value){
    this.PokeService.getPokemonDetailByIdOrName(value).subscribe((response) => {
      if(response){
        this.searchedPokemon = response;
        this.pokemonName = response.name;
        this.pokemonId = response.id;
        this.pokemonImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + response.id + ".png";
        console.log(this.searchedPokemon)
      }
    }, (error) => {
      if(error.status == 404){
        this.searchedPokemon = []
        this.dataNotFound = "Data Not Found"
        console.log(error.status)
      }
    });
  }

  backButton(){
    this._location.back();
  }

}

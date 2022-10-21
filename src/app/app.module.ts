import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { CardsComponent } from './Components/cards/cards.component';

import { PokeApiService } from './services/poke-api.service';
import { Config } from './model/config';
import { PokemonDetailsComponent } from './Components/pokemon-details/pokemon-details.component';
import { SearchPokemonComponent } from './Components/search-pokemon/search-pokemon.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { LoaderComponent } from './Components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponent,
    CardsComponent,
    PokemonDetailsComponent,
    SearchPokemonComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule.forRoot(),
  ],
  providers: [
    PokeApiService,
    Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

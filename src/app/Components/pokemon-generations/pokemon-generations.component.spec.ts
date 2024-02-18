import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGenerationsComponent } from './pokemon-generations.component';

describe('PokemonGenerationsComponent', () => {
  let component: PokemonGenerationsComponent;
  let fixture: ComponentFixture<PokemonGenerationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonGenerationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonGenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

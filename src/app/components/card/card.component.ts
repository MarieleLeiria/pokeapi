import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModelComponent } from '../shared/card-model/card-model.component';
import { PokeDataService } from '../../poke-data.service';
import { BehaviorSubject } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [PokeDataService]
})
export class CardComponent implements OnInit {
  poke: any = null;
  pokee: any = []

  searchPoke: string = "";
  pokemons: any[] = [];


  constructor(private srv: PokeDataService) { }
  getPokeInfo(event: Event): void {
    event.preventDefault()
    console.log(this.searchPoke)
    this.srv.getData(this.searchPoke).subscribe(
      (data) => {
        this.pokee = data.results;
      },
      (error) => {
        console.error("erro ao buscar pokemon", error);
        this.poke = null;
      }
    )


  };

  ngOnInit() {
    this.pokee.forEach((pokemon: any) => {
      this.srv.getData(pokemon.url).subscribe(details => {
        this.pokemons.push({
          pokeName: details.name,
          types: details.types,
          weight: details.weight,
          height: details.height,
          image: details.sprites.front_default
        })
      })
    })
  }

  private inputValor = new BehaviorSubject<string>(''); // Estado inicial vazio
  inputValor$ = this.inputValor.asObservable(); // Observable para o template



  atualizarValorinput(event: Event) {
    const valor = (event.target as HTMLInputElement).value; // Fazendo type assertion
    this.inputValor.next(valor); // Atualiza o estado
    this.searchPoke = valor;

  }

  @Input() pokeName?: string;
  @Input() weight?: number;
  @Input() primaryType?: string;
  @Input() secondaryType?: string;
  @Input() height?: number;
  @Input() image?: any;
}




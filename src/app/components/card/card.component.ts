import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardModelComponent } from '../shared/card-model/card-model.component';
import { PokeDataService } from '../../poke-data.service';
import { BehaviorSubject } from 'rxjs';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  providers: [PokeDataService]
})
export class CardComponent implements OnInit {
  poke: any = null;
  pokee: any = {}

  searchPoke: string = "";


  constructor(private srv: PokeDataService) { }
  getPokeInfo(event: Event): void {
    event.preventDefault()
    console.log(this.searchPoke)
    this.srv.getData(this.searchPoke).subscribe(
      (data) => {
        this.pokee = data;
        console.log(data)

      },
      (error) => {
        console.error("erro ao buscar pokemon", error);
        this.poke = null;
      }
    )

  };

  ngOnInit() {
    // this.getPoke()
  }

  private inputValor = new BehaviorSubject<string>(''); // Estado inicial vazio
  inputValor$ = this.inputValor.asObservable(); // Observable para o template



  atualizarValorinput(event: Event) {
    const valor = (event.target as HTMLInputElement).value; // Fazendo type assertion
    this.inputValor.next(valor); // Atualiza o estado
    this.searchPoke = valor
    console.log("atualizou")

  }

  @Input() pokeName?: string;
  @Input() weight?: number;
  @Input() primaryType?: string;
  @Input() height?: number;
  @Input() cardModel?: 'primary';

}




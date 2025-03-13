import { CommonModule } from '@angular/common';
import { PokeDataService } from './../../poke-data.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [PokeDataService]
})

export class HomeComponent implements OnInit {


  poke: any;
  url = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private srv: PokeDataService) { }
  getPoke(): void {

    this.srv.getData(this.url).subscribe(
      (data) => {
        this.poke = data;
        console.log(data.results)
      }
    )

  };

  ngOnInit() {
    this.getPoke()
  }
}

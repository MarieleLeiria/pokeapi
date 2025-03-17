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

export class HomeComponent {

}

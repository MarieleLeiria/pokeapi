import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModelComponent } from '../shared/card-model/card-model.component';

@Component({
  selector: 'app-card',
  imports: [CommonModule, CardModelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}

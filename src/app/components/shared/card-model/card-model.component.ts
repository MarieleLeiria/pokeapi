import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-model',
  imports: [CommonModule],
  templateUrl: './card-model.component.html',
  styleUrl: './card-model.component.css'
})

export class CardModelComponent {
  @Input() pokeName?: string;
  @Input() attackPower?: number;
  @Input() primaryType?: string;
  @Input() secondaryType?: string;
  @Input() defensePower?: number;
  @Input() cardModel?: 'primary';
}

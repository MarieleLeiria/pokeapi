
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from "./components/card/card.component";
import { CommonModule } from '@angular/common';
import { CardModelComponent } from './components/shared/card-model/card-model.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HttpClientModule, CardComponent, CommonModule, CardModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})

export class AppComponent {

  title = 'firts-version';

}



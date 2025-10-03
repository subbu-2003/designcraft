import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayOut } from "./lay-out/lay-out";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayOut],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('designcraft');
}

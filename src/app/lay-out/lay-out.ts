import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../Layout/header/header";
import { Footer } from "../Layout/footer/footer";

@Component({
  selector: 'app-lay-out',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './lay-out.html',
  styleUrl: './lay-out.css'
})
export class LayOut {

}

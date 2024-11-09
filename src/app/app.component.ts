import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TempComponent } from "./tem/temp/temp.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AddMenssageComponent } from './tem/add-menssage/add-menssage.component';
import { ListMenssageComponent } from './tem/list-menssage/list-menssage.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TempComponent, NavbarComponent, AddMenssageComponent, ListMenssageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularAPI';
}
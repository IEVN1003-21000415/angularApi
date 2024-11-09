import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MessageserviceService} from '../messageservice.service';
 

@Component({
  selector: 'app-list-menssage',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './list-menssage.component.html',
  styles: ``
})
export class ListMenssageComponent {
constructor(public messageService: MessageserviceService){

}
}

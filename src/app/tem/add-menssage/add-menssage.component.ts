import { Component, OnInit} from '@angular/core';
import { MessageserviceService } from '../messageservice.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-menssage',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-menssage.component.html',
  styles: ``
})
export class AddMenssageComponent {

formGroup!:FormGroup;
constructor(public messageService: MessageserviceService, private fb: FormBuilder){}
  ngOnInit(): void{
    this.formGroup=this.initForm();

  }
  initForm():FormGroup{
    return this.fb.group({
      nombre:['']
    })
  }
 addAlumno(){
  let {nombre}=this.formGroup.value;
  this.messageService.add(nombre)
  this.formGroup.get('nombre')?.setValue('')


 }
}

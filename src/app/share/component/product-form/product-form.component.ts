import {Component, Input} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { METHODOLOGY } from '../../staticFile/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  @Input() form!: FormGroup;
  reachMax!: boolean;
  methodology = METHODOLOGY
  
  constructor() { }

  addDeveloper() {
    const add = this.form.get('developers') as FormArray;
    add.push(new FormControl('',[Validators.required]))
    // disable if reach to 5
    this.reachMax = add.value.length > 4
  }

  removeDeveloper(index: number) {
    this.developers.removeAt(index);
  }

  get developerControls(){
    return this.developers.controls as FormControl[]
 }

  get developers(){
    return this.form.controls["developers"] as FormArray
  }


  isDeveloperInvalid(i: number) {
    const control = this.developerControls[i];
    return control?.invalid && control?.touched;
  }

  isInvalid(name: string) {
    const control = this.form.get(name);   
    return control?.invalid && control?.touched;
  }

}

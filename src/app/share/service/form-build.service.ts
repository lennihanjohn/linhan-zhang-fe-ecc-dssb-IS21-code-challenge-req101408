import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class FormBuildService {

  constructor(private formBuilder: FormBuilder) { }

  // initialized the form
  productForm(){
    // make sure the domain is valid and start with https://github.com/bcgov
    const urlRegex = /^http(s)?:\/\/github.com\/bcgov\/(?!.*\/\/)([a-zA-Z-.\/]*)?$/

    return this.formBuilder.group({
      productId: [],
      productName: ['', [Validators.required]],
      productOwnerName: ['', Validators.required],
      developers: this.formBuilder.array([], Validators.required),
      scrumMasterName: ['', Validators.required],
      startDate: ['', Validators.required],
      methodology: ['', Validators.required],
      location: ['', [Validators.required, Validators.pattern(urlRegex)]],
    });
  }

}

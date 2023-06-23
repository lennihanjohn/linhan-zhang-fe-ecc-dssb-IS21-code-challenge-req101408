import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuildService } from 'src/app/share/service/form-build.service';
import { ProductService } from 'src/app/share/service/product-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  form!: FormGroup
  submitted = false;

  constructor(private ps: ProductService, private router: Router, private fb: FormBuildService) { }

  ngOnInit() {
    this.form = this.fb.productForm()
  }
  onSubmit() {
    this.form.markAllAsTouched()
    if(this.form.valid){      
      this.ps.create(this.form.value).subscribe({
        next: (data: any) => {
          this.goBackMain()
        },
        error: (e) => console.error(e)
      })
    }
  }

  goBackMain (){
    
  }
}

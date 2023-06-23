import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/share/model/product.model';
import { FormBuildService } from 'src/app/share/service/form-build.service';
import { ProductService } from 'src/app/share/service/product-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  form!: FormGroup;
  product!: Product
  constructor(private ps: ProductService, private route: ActivatedRoute, private router: Router, private fb: FormBuildService) { }


  ngOnInit() {
    const productId = this.route.snapshot.paramMap?.get('id');
    if (!productId) {
      this.goBackMain()
      return;
    }
    this.form = this.fb.productForm()
    this.ps.getById(parseInt(productId)).subscribe({
      next: (data: any) => {
        this.form.patchValue(data);
        data.developers.forEach((dev: string) => {
          (this.form.get('developers') as FormArray).push(new FormControl(dev))
        });
      },
      error: (e) => console.error(e)
    })
  }

  onSubmit() {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.ps.update(this.form.value).subscribe({
        next: (data: any) => {
          this.goBackMain()
        },
        error: (e) => console.error(e)
      })
    }
  }

  goBackMain() {
    this.router.navigate(['']);
  }
}

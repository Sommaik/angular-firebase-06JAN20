import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup = this.fb.group({
    code: ['', [Validators.required] ],
    name: [''],
    active: [true],
    price: [0, [Validators.required]]
  });

  isEdit = false;
  id: string;

  constructor(
    private fb: FormBuilder,
    private afstore: AngularFirestore,
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
    actRoute.params.subscribe( params => {
      if (params.id) {
        this.isEdit = true;
        this.id = params.id;
        this.afstore
          .collection<Product>('product')
          .doc(params.id)
          .get()
          .subscribe(ref => {
            this.productForm.patchValue( ref.data() );
          });
      }
    });
  }

  ngOnInit() {
  }

  onFormSubmit() {
    if (this.productForm.valid) {
      if (this.isEdit) {
        this.afstore
        .collection('product')
        .doc(this.id)
        .set(this.productForm.value)
        .then(doc => this.router.navigate(['', 'admin', 'product']))
        .catch(reason => console.log('show error'));
      } else {
        this.afstore
        .collection('product')
        .add(this.productForm.value)
        .then(doc => this.router.navigate(['', 'admin', 'product']))
        .catch(reason => console.log('show error'));
      }
    } else {
      console.log('show error');
    }
  }

}

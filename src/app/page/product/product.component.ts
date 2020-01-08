import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data: Observable<Product[]>;

  constructor(
    private router: Router,
    private afstore: AngularFirestore
  ) {
    this.data = afstore
      .collection<Product>('product')
      .valueChanges({ idField: 'id' });
  }

  ngOnInit() {
  }

  onAddButtonClick() {
    this.router.navigate(['', 'admin', 'product-form']);
  }

  onDeleteButtonClick(id: string) {
    this.afstore
      .collection('product')
      .doc(id)
      .delete()
      .catch(reason => console.log(reason));
  }

  onEditButtonClick(id: string) {
    this.router.navigate(['', 'admin', 'product-form', id]);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.page.html',
  styleUrls: ['./category-item.page.scss'],
})
export class CategoryItemPage implements OnInit {
  // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  category = 'رب گوجه فرنگی';
  products: Array<any>;
  i = 11;

  constructor() {
    this.products = [];
    this.addProduct();
  }

  addProduct() {
    for (let i = 0; i < 10; i++) {
      this.products.push({name: 'رب' + this.i++, price: 1000});
    }
  }

  ngOnInit() {
  }

  loadData(event) {
    // alert('hi');
    setTimeout(() => {
      console.log('Done');
      this.addProduct();
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.products.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }

}

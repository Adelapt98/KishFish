import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: 'category.page.html',
  styleUrls: ['category.page.scss'],
})
export class CategoryPage {

  constructor() {}
  
  public categories: Array<{ title: string; icon: string }> = [];
  ionViewDidEnter(){
   
    this.categories = [];
    for(let i = 1; i < 10; i++){
      this.categories.push({
        title: 'ماهی ' + i,
        icon: 'https://image.flaticon.com/icons/png/512/413/413626.png'
      })
    }
  }

}

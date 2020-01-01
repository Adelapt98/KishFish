import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryItemPage } from './category-item.page';

describe('CategoryItemPage', () => {
  let component: CategoryItemPage;
  let fixture: ComponentFixture<CategoryItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

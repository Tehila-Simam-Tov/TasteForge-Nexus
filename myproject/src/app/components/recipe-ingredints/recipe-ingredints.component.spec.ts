import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredintsComponent } from './recipe-ingredints.component';

describe('RecipeIngredintsComponent', () => {
  let component: RecipeIngredintsComponent;
  let fixture: ComponentFixture<RecipeIngredintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeIngredintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeIngredintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

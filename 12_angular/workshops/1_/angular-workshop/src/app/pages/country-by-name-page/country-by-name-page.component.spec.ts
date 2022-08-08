import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryByNamePageComponent } from './country-by-name-page.component';

describe('CountryByNamePageComponent', () => {
  let component: CountryByNamePageComponent;
  let fixture: ComponentFixture<CountryByNamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryByNamePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryByNamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

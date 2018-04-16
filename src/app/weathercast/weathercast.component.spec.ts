import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathercastComponent } from './weathercast.component';

describe('WeathercastComponent', () => {
  let component: WeathercastComponent;
  let fixture: ComponentFixture<WeathercastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeathercastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathercastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

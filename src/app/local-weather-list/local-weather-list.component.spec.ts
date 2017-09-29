import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalWeatherListComponent } from './local-weather-list.component';

describe('LocalWeatherListComponent', () => {
  let component: LocalWeatherListComponent;
  let fixture: ComponentFixture<LocalWeatherListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalWeatherListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalWeatherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

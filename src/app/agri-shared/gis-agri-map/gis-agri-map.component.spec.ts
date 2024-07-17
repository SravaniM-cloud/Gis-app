import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GisAgriMapComponent } from './gis-agri-map.component';

describe('GisAgriMapComponent', () => {
  let component: GisAgriMapComponent;
  let fixture: ComponentFixture<GisAgriMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GisAgriMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GisAgriMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

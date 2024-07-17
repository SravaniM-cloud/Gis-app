import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriLayersComponent } from './agri-layers.component';

describe('AgriLayersComponent', () => {
  let component: AgriLayersComponent;
  let fixture: ComponentFixture<AgriLayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriLayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

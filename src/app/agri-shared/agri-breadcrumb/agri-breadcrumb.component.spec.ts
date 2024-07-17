import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriBreadcrumbComponent } from './agri-breadcrumb.component';

describe('AgriBreadcrumbComponent', () => {
  let component: AgriBreadcrumbComponent;
  let fixture: ComponentFixture<AgriBreadcrumbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriBreadcrumbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

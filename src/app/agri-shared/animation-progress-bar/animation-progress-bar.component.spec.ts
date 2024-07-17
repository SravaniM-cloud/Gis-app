import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationProgressBarComponent } from './animation-progress-bar.component';

describe('AnimationProgressBarComponent', () => {
  let component: AnimationProgressBarComponent;
  let fixture: ComponentFixture<AnimationProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

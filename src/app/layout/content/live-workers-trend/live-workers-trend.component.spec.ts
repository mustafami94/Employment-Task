import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWorkersTrendComponent } from './live-workers-trend.component';

describe('LiveWorkersTrendComponent', () => {
  let component: LiveWorkersTrendComponent;
  let fixture: ComponentFixture<LiveWorkersTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiveWorkersTrendComponent]
    });
    fixture = TestBed.createComponent(LiveWorkersTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

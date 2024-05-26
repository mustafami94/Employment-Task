import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveInfoComponent } from './active-info.component';

describe('ActiveInfoComponent', () => {
  let component: ActiveInfoComponent;
  let fixture: ComponentFixture<ActiveInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveInfoComponent]
    });
    fixture = TestBed.createComponent(ActiveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHazardousZoneComponent } from './people-hazardous-zone.component';

describe('PeopleHazardousZoneComponent', () => {
  let component: PeopleHazardousZoneComponent;
  let fixture: ComponentFixture<PeopleHazardousZoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeopleHazardousZoneComponent]
    });
    fixture = TestBed.createComponent(PeopleHazardousZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

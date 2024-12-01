import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitMeasuresComponent } from './unit-measures.component';

describe('UnitMeasuresComponent', () => {
  let component: UnitMeasuresComponent;
  let fixture: ComponentFixture<UnitMeasuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnitMeasuresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

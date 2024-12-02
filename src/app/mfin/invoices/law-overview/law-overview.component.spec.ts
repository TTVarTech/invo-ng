import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawOverviewComponent } from './law-overview.component';

describe('LawOverviewComponent', () => {
  let component: LawOverviewComponent;
  let fixture: ComponentFixture<LawOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LawOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

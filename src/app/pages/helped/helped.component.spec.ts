import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpedComponent } from './helped.component';

describe('HelpedComponent', () => {
  let component: HelpedComponent;
  let fixture: ComponentFixture<HelpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

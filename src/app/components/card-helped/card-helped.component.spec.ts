import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHelpedComponent } from './card-helped.component';

describe('CardHelpedComponent', () => {
  let component: CardHelpedComponent;
  let fixture: ComponentFixture<CardHelpedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardHelpedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardHelpedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

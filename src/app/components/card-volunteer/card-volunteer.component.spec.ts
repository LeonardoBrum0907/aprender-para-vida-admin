import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVolunteerComponent } from './card-volunteer.component';

describe('CardVolunteerComponent', () => {
  let component: CardVolunteerComponent;
  let fixture: ComponentFixture<CardVolunteerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardVolunteerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

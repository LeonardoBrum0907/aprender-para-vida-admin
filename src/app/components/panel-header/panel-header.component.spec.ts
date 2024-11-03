import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelHeaderComponent } from './panel-header.component';
import { By } from '@angular/platform-browser';

describe('PanelHeaderComponent', () => {
  let component: PanelHeaderComponent;
  let fixture: ComponentFixture<PanelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event when input value changes', () => {
    spyOn(component.search, 'emit');

    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const testValue = 'test search';

    inputElement.value = testValue;
    inputElement.dispatchEvent(new Event('input'));

    expect(component.search.emit).toHaveBeenCalledWith(testValue);
  });
});
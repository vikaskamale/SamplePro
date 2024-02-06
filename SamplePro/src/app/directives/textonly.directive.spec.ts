

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppointmentListComponent } from '../appointment-list/appointment-list.component';
import { TextonlyDirective } from './textonly.directive';
import { FormsModule } from '@angular/forms';

describe('AppointmentListComponent', () => {
  let fixture: ComponentFixture<AppointmentListComponent>;
  let component: AppointmentListComponent;
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointmentListComponent, TextonlyDirective],
      imports: [FormsModule], // Include the FormsModule in the imports array
    });

    fixture = TestBed.createComponent(AppointmentListComponent);
    component = fixture.componentInstance;
    inputElement = fixture.nativeElement.querySelector('input');
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should only allow letters and spaces in the input', () => {
    // Test with valid input
    setInputValue('Valid Input');
    expect(inputElement.value).toBe('');
    
    // Test with invalid input (containing numbers)
     setInputValue('Invalid123 Input');
    expect(inputElement.value).toBe('Invalid Input');
  });
  function setInputValue(value: string): void {
    inputElement.value = value;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
  }
});

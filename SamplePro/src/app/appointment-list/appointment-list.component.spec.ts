import { Component } from "@angular/core";
import { AppointmentListComponent } from "./appointment-list.component";

describe('AppointmentListComponent', ()=> {
  it('should initialize with an empty appointment list', ()=> {
    const component = new AppointmentListComponent();
    expect(component.appointments).toEqual([]);
  })
  it('should add a new appointment', () => {
    const component = new AppointmentListComponent();
    component.newAppointmentTitle = 'Test Appointment';
    component.newAppointmentDate = '2024-02-05T10:30:00';

    component.addAppointment();

    expect(component.appointments.length).toBe(1);
    expect(component.appointments[0].title).toBe('Test Appointment');
    expect(component.appointments[0].date).toBe('2024-02-05T10:30:00');
  });
  it('should delete an appointment',()=>{
    const component = new AppointmentListComponent();
    const testAppointment = {
      id: 123,
      title:'Test Appointment',
      date:'2024-02-05T10:30:00'
    };
    component.appointments = [testAppointment];
    component.deleteAppointment(0);
    expect(component.appointments.length).toBe(0);
  })
})



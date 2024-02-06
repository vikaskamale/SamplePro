import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit{
  
  ngOnInit(): void {
   console.log("got loaded");
  let savedAppointments = localStorage.getItem("appointments")
  this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  newAppointmentTitle:string = "";
  newAppointmentDate: string = new Date().toISOString(); // Convert Date to string using ISO format

  appointments: Appointment[] = [];

 
  
  addAppointment(){
    if(this.newAppointmentTitle.trim().length && this.newAppointmentDate){
      let newAppointment : Appointment = {
        id:Date.now(),
        title:this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment)

      this.newAppointmentTitle = "" ;
      this.newAppointmentDate = new Date().toISOString();

      console.log(newAppointment)

      localStorage.setItem("appointments", JSON.stringify(this.appointments))
    }
  }

  deleteAppointment(index:number){
   this.appointments.splice(index,1)
   localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

}

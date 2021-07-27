import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consulta y Creación de Clientes';
  
  constructor(private router: Router) { }
  
  GetClients() {
    this.router.navigate(["getClients"]);
  }
  AddClient() {
    this.router.navigate(["addClient"]);
  }
}

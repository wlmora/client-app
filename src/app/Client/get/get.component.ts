import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ServiceService } from '../../Service/service.service';
import { Client } from 'src/app/Model/Client';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  clients: Client[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getClients()
      .subscribe(data => {
        this.clients = data;
      })
  }
}

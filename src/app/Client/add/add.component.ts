import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { ServiceService } from '../../Service/service.service';
import { Client } from 'src/app/Model/Client';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  client: Client;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.addClient(this.client)
      .subscribe(data => {
        console.log(data);
      }) 
  }

  Save() {
    this.router.navigate(["save"]);
  }
}

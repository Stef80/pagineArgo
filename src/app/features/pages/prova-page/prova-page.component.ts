import {Component, Input, OnInit} from '@angular/core';
import { Client } from '../../models/client';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prova-page',
  templateUrl: './prova-page.component.html',
  styleUrls: ['./prova-page.component.scss']
})
export class ProvaPageComponent implements OnInit {
  cliente: Client;
  indirizzo = '';
  show = false;
  show2 = false;
  show3 = false;
 codCli: string;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
     this.codCli = this.activatedRoute.snapshot.paramMap.get('cod_Cliente');
     console.log("prova-page", this.codCli);
     this.getClient(this.codCli);
  }


  public getClient(codCli: string) {

    this.http.get<Client>('http://localhost:8080/cliente/cli/' + codCli).subscribe(
      risp => { this.cliente = risp;
                this.indirizzo = this.cliente.indCliCap + ' - ' + this.cliente.indCliLocalita;
                console.log(risp);
    }
    );
  }


}

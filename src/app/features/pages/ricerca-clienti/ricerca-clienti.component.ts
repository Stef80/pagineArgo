import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-ricerca-clienti",
  templateUrl: "./ricerca-clienti.component.html",
  styleUrls: ["./ricerca-clienti.component.scss"]
})
export class RicercaClientiComponent implements OnInit {
  // @ViewChild('f', { static: false })
  // mytemplateForm: NgForm;

  cliente = {
    codCli: "",
    denominazione: "",
    pIva: "",
    cF: "",
    mat: "",
    pod: ""
  };

  show = false;
  body: HttpParams;
  path: Object;
  lente: boolean = true;
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  cerca(form: NgForm) {
    this.show = true;
    this.cliente.codCli = form.form.value.codCli;
    this.cliente.cF = form.form.value.cF;
    this.cliente.denominazione = form.form.value.denominazione;
    this.cliente.pIva = form.form.value.pIva;
    this.cliente.mat = form.form.value.mat;
    this.cliente.pod = form.form.value.pod;

    this.body = new HttpParams()
      .set("codCli", this.cliente.codCli)
      .set("cF", this.cliente.cF)
      .set("denominazione", this.cliente.denominazione)
      .set("pIva", this.cliente.pIva)
      .set("mat", this.cliente.mat)
      .set("pod", this.cliente.pod);
    let params = this.body;
    return this.http
      .get("http://localhost:8080/cliente/all1", { params })
      .subscribe(risp => {
        console.log(risp);
        this.path = risp;
      });
    // this.http.get("http://localhost:8080/cliente/all1/" + body).subscribe(
    //  risp => console.log('risposta:', JSON.parse('' + risp).data))
  }

  ripulisci(form: NgForm) {
    this.cliente.codCli = "";
    this.cliente.cF = "";
    this.cliente.denominazione = "";
    this.cliente.pIva = "";
    this.cliente.mat = "";
    this.cliente.pod = "";
  }
}

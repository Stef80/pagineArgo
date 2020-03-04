import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Riepilogo } from "src/app/features/models/riepilogo_doc";

@Component({
  selector: "app-tab-riepilogo",
  templateUrl: "./tab-riepilogo.component.html",
  styleUrls: ["./tab-riepilogo.component.scss"]
})
export class TabRiepilogoComponent implements OnInit {
  path: Object;
  lente: boolean = false;
  body: HttpParams;
  riepilogo_obj: Riepilogo = new Riepilogo();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getRiepilogo();
  }

  public getRiepilogo() {
    this.http.get("http://localhost:8080/testdoc/riepilogo").subscribe(risp => {
      console.log(risp);
      this.path = risp;
    });
  }

  cerca(form: NgForm) {
    console.log("cerca riepilogo", form.form.value);
    console.log("riepilogo_obj", this.riepilogo_obj);
    this.riepilogo_obj.sTestoGriglia = form.form.value.testo;
    this.riepilogo_obj.quantita = form.form.value.quantita;
    this.riepilogo_obj.prezzo = form.form.value.prezzo;
    this.riepilogo_obj.importo = form.form.value.importo;
    this.body = new HttpParams()
      .set("testo", this.riepilogo_obj.sTestoGriglia)
      .set("quantita", this.riepilogo_obj.quantita.toString())
      .set("prezzo", this.riepilogo_obj.prezzo.toString())
      .set("importo", this.riepilogo_obj.importo.toString());

    this.http
      .get("http://localhost:8080/testdoc/riepilogo", {
        params: this.body
      })
      .subscribe(r => {
        console.log("cerca riepilogo", r);
        this.path = r;
      });
  }
}

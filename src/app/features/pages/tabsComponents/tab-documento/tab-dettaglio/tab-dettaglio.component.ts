import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { Dettaglio } from "src/app/features/models/dettaglio";

@Component({
  selector: "app-tab-dettaglio",
  templateUrl: "./tab-dettaglio.component.html",
  styleUrls: ["./tab-dettaglio.component.scss"]
})
export class TabDettaglioComponent implements OnInit {
  path: Object;
  lente: boolean = false;
  body: HttpParams;
  dettaglio_obj: Dettaglio = new Dettaglio();
  conferma_chiamata: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDettaglio();
  }

  public getDettaglio() {
    this.http.get("http://localhost:8080/testdoc/dettagli").subscribe(risp => {
      this.path = risp;
      this.conferma_chiamata = true;
    });
  }

  cerca(form: NgForm) {
    this.conferma_chiamata = false;
    this.dettaglio_obj.cdPunto = form.form.value.codice_punto;
    this.dettaglio_obj.dtPeriodo = form.form.value.mese;
    this.dettaglio_obj.sTestoGriglia = form.form.value.testo;
    this.dettaglio_obj.quantita = form.form.value.quantita;
    this.dettaglio_obj.prezzo = form.form.value.prezzo;
    this.dettaglio_obj.importo = form.form.value.importo;

    this.body = new HttpParams()
      .set("codPunto", this.dettaglio_obj.cdPunto)
      .set("mese", this.dettaglio_obj.dtPeriodo)
      .set("testo", this.dettaglio_obj.sTestoGriglia)
      .set("quantita", this.dettaglio_obj.quantita)
      .set("prezzo", this.dettaglio_obj.prezzo)
      .set("importo", this.dettaglio_obj.importo);
    this.http
      .get("http://localhost:8080/testdoc/dettagli", { params: this.body })
      .subscribe(risp => {
        console.log("risp di dettaglio", risp);
        this.path = risp;
        this.conferma_chiamata = true;
      });
  }
}

import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pagamento } from "src/app/features/models/pagamenti";

@Component({
  selector: "app-tab-pagamenti",
  templateUrl: "./tab-pagamenti.component.html",
  styleUrls: ["./tab-pagamenti.component.scss"]
})
export class TabPagamentiComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ris: Pagamento;

  path = {
    dataPagamento: "",
    importo: 0,
    UDM: "",
    N_Postale: "",
    n_Mav: ""
  };
  path1: Object;
  totPagamento: string;
  totRate: string;

  ngOnInit() {
    this.getpagamento();
  }

  getpagamento() {
    this.http
      .get<Pagamento>("http://localhost:8080/testdoc/pagamenti")
      .subscribe(risp => {
        this.ris = risp;
        console.log("risposta pagamenti", this.ris);
        console.log(this.ris.dtPagamento);
        this.path.dataPagamento = this.ris.dtPagamento;
        this.path.importo = this.ris.importo;
        this.path.UDM = this.ris.cdUdmImp;
        this.path.N_Postale = this.ris.bollPostale;
        this.path.n_Mav = this.ris.mav;
        this.path1 = this.path;
        this.totPagamento = this.ris.totDocumento;
        this.totRate = this.ris.totRate;
        console.log("variabile path", this.path);
      });
  }
}

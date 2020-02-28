import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pagamento } from "src/app/features/models/pagamenti";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-tab-pagamenti",
  templateUrl: "./tab-pagamenti.component.html",
  styleUrls: ["./tab-pagamenti.component.scss"]
})
export class TabPagamentiComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ris: Object;

  path = {
    dataPagamento: "",
    importo: 0,
    UDM: "",
    N_Postale: "",
    n_Mav: ""
  };
  path1 = [];
  totPagamento: string;
  totRate: string;

  ngOnInit() {
    this.getpagamento();
  }

  getpagamento() {
    this.http
      .get<Pagamento[]>("http://localhost:8080/testdoc/pagamenti")
      .subscribe(risp => {
        this.path.dataPagamento = risp[0].dtPagamento;
        this.path.importo = risp[0].importo;
        this.path.UDM = risp[0].cdUdmImp;
        this.path.N_Postale = risp[0].bollPostale;
        this.path.n_Mav = risp[0].mav;
        this.totPagamento = risp[0].totDocumento;
        this.totRate = risp[0].totRate;
        this.path1.push(this.path);
        let keys = Object.keys(this.path);
        console.log("variabile path", this.path);
        console.log("chiavi in pagamento", keys);
      });
  }
}

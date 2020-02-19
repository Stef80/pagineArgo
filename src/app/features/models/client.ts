import { TpMetodoPagamento } from './tpMetodoPagamento';
import { GeoLocalita } from './geolocalita';

export class Client {

    public cdCliente?: string;
    public dataValidoDal: Date;
    public denominazione: string;
    public nome: string;
    public cognome: string;
    public cf: string;
    public sPIva: string;
    public cdTpCliente: string;
    public flPersFisica: string;
    public fax: string;
    public email: string;
    public emailPec: string;
    public telefono: string;
    public dataNascita: Date;
    public sesso: string;
    public idLocalitaNascita: number;
    public idProfilo: number;
    public indirizzoSpedizione: string;
    public dsTipoCliente: string;
    public flFornitore: string;// filtro per fornitore S, N
    // Per il portale
    public login: string;
    public  flCambiaEmail: string;// IN fase di attivazione utenza sul portale
    public  numVerde: string;// nel caricamento pagina dati anagrafici
    public podPdr: string;// nuova gestione filtro clienti
    public matricolaPresa: string;// nuova gestione filtro clienti
    public cdAgenzia: string;
    public cdAgente: string;
    public dsAgenzia: string;
    public dsAgente: string;
    // public String partIva;
    // nuovo campo 2011 03 25
    public idContatto: number;
    public msgVarAnag: string;// nel caricamento pagina dati anagrafici del portale
    public geolocalitaNascita: GeoLocalita;
    ​
        public  destinatarioFatt: string;
        // Indirizzo Fattura
        public indFatDenomUrb: string;
        public indFatVia: string;
        public indFatCivico: string;
        public indFatIndirizzo: string;
        public indFatCap: string;
        public indFatLocalita: string;
        public indFatIdLocalita: number;
        public indFatAggiuntivo: string;
        public indFatEdificio: string;
        public faxDestFattura: string;
        public emailDestFattura: string;
        public idCcBanc: number;
        public idCcPost: number;
        public cdCanaleInvio: string;
        public dsCanaleInvio: string;
    ​


     public tpMetodoPagamento: TpMetodoPagamento;
        // Indirizzo cliente
        public indCliDenomUrb: string;
        public indCliVia: string;
        public  indCliCivico: string;
        public indCliCap: string;
        public indCliLocalita: string;
        public  indCliIdLocalita: string;
        public indCliEdificio: string;
        public idAmministratore: number;
        public dsAmministratore: string;
        public iban: string;// iban rid o iban cliente dipende dal metodo di pagamento
        public idTpFreqFatt: number;
        public dsTpFreqFatt: string;
        public dsMetodoPagam: string;// DS_METODO_PAGAM
        public cdMetodoPagam: string;// cD_METODO_PAGAM
        public dsCcPost: string;
        public dsCcBanc: string;
        public cdCalendario: string;
        public cdTpValuta: string;
        public multiCheck: string;
        public cdNazione: string;
        public dsNazione: string;
        public idUserPortale: number;
        public bic: string;
        public countRecords: number;
        public cellulare: string;
        public cdFasciaOrariaCont: string;
        public dsFasciaOrariaCont: string;
    ​


}

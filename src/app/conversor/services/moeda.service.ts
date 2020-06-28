import { Injectable } from '@angular/core';
import { Moeda } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    { "sigla": "AUD", "descricao": "Dólar Australiano" },
    { "sigla": "BGN", "descricao": "Lev Búlgaro" },
    { "sigla": "BRL", "descricao": "Real Brasileiro" },
    { "sigla": "CAD", "descricao": "Dólar Canadense" },
    { "sigla": "CHF", "descricao": "Franco Suiço" },
    { "sigla": "CNY", "descricao": "Yuan Chinês" },
    { "sigla": "CZK", "descricao": "Coroa República Tcheca" },
    { "sigla": "DKK", "descricao": "Coroa Dinamarquesa" },
    { "sigla": "EUR", "descricao": "Euro" },
    { "sigla": "GBP", "descricao": "Libra Esterlina" },
    { "sigla": "HKD", "descricao": "Dólar de Hong Kong" },
    { "sigla": "HRK", "descricao": "Coroa da Croácia" },
    { "sigla": "HUF", "descricao": "Florim Húngaro" },
    { "sigla": "IDR", "descricao": "Rupia da Indonésia" },
    { "sigla": "ILS", "descricao": "Novo Shekel Israelense" },
    { "sigla": "INR", "descricao": "Rupia indiana" },
    { "sigla": "JPY", "descricao": "Iene Japonês" },
    { "sigla": "KRW", "descricao": "Won Sul-Coreano" },
    { "sigla": "MXN", "descricao": "Peso Mexicano" },
    { "sigla": "MYR", "descricao": "Málasia Ringgit" },
    { "sigla": "NOK", "descricao": "Coroa da Noruega" },
    { "sigla": "NZD", "descricao": "Dólar da Nova Zelândia" },
    { "sigla": "PHP", "descricao": "Peso Filipino" },
    { "sigla": "PLN", "descricao": "Zloty da Polônia" },
    { "sigla": "RON", "descricao": "Leu Romeno" },
    { "sigla": "RUB", "descricao": "Belarus Ruble" },
    { "sigla": "SEK", "descricao": "Coroa da Suécia" },
    { "sigla": "SGD", "descricao": "Dólar de Singapura" },
    { "sigla": "THB", "descricao": "Baht da Tailândia" },
    { "sigla": "TRY", "descricao": "Lira Turca" },
    { "sigla": "USD", "descricao": "Dólar Americano" },
    { "sigla": "ZAR", "descricao": "Rand da África do Sul" },
  ];

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    for (let moedaObj of this.moedasObj) {
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
  
}

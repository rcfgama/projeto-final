import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conversao, ConversaoResponse } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=1e8a1434635fc78724161341b5e25621";

  constructor(private http: HttpClient) { }

  /**
   * Realiza a chamada para a API de conversão das moedas.
   * @param conversao Conversao
   * @returns Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<any> {
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http
     .get(this.BASE_URL + params);
  }

  /**
   * Retorna a cotação "para", dado uma response.
   * @param conversaoResponse ConversaoResponse
   * @param conversao Conversao
   * @returns number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
      if (conversaoResponse === undefined) {
        return 0;
    }

      return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retorna a cotação "de", dado uma response.
   * @param conversaoResponse ConversaoResponse
   * @param conversao Conversao 
   * @returns string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  /**
   * Retorna a data da cotação, dado uma response.
   * @param conversaoResponse ConversaoResponse
   * @returns string
   */  
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Mascota } from '../model/mascota';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = environment.apiRestFull + '/register';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Mascota[]> {
    return this.httpClient.get<Mascota[]>(this.productUrl);
  }
  public detail(id: number): Observable<Mascota> {
    return this.httpClient.get<Mascota>(this.productUrl + `/${id}`);
  }
  public create(product: Mascota): Observable<any> {
    return this.httpClient.post<any>(this.productUrl, product);
  }
  public update(id: number, product: Mascota): Observable<any> {
    return this.httpClient.put<any>(this.productUrl + `/${id}`, product);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productUrl + `/${id}`);
  }

}

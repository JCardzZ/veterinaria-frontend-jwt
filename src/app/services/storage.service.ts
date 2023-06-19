import { Injectable } from '@angular/core';
import { Mascota } from '../model/mascota';

const KEY_PROD = 'prod_update';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setProduct(product: Mascota): void {
    localStorage.setItem(KEY_PROD, JSON.stringify(product));
  }
  public getProduct(): Mascota {
    return JSON.parse(localStorage.getItem(KEY_PROD)!);
  }
  public clear(): void {
    localStorage.removeItem(KEY_PROD);
  }
}

import { Injectable } from '@angular/core';
import { data } from 'src/environments/environment.data';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Data = data;

  setData(value: Data): void {
    this.data = value;
  }

  getData(): Data {
    return this.data;
  }
}

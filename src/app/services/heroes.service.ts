import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient){};

  getHeroes(url: string){
    return this.httpClient.get(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Hero } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient){};

  public getHeroes(url: string){
    return this.httpClient.get(url);
  }

  public getHeroeById(urlParam: string, id: string){
      return this.httpClient.get(urlParam)
      .pipe(
        filter( (hero: any)=> hero.id === id)
        );
  }

  public updateHero(id: string){
    
  }

  public deleteHero(id: string){

  }

}

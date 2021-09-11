import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hero } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient){};

  public getHeroes(url: string): Observable<Hero>{
    return this.httpClient.get<Hero>(url);
  }

  public getHeroeById(urlParam: string, id: string): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(urlParam)
    .pipe( 
      map( (heroes: Hero[]) => heroes.filter( (heroes: Hero)=> heroes.id === id) )
    );
  }

  public updateHero(id: string){
    
  }

  public deleteHero(id: string){

  }

}

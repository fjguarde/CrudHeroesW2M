import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Hero } from '../models/interfaces'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpClient: HttpClient) { }

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${environment.apiUrl}/heroes`)
  }

  public getHeroeById(id: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${environment.apiUrl}/heroes`)
      .pipe(
        map((heroes: Hero[]) => heroes.filter((heroes: Hero) => heroes.id === id))
      )
  }

  public updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${environment.apiUrl}/heroes`, hero)
  }

  public deleteHero(id: string): Observable<string> {
    const httpParams = new HttpParams().set('id', id)
    const options = { params: httpParams }
    return this.httpClient.delete<string>(`${environment.apiUrl}/heroes`, options)
  }

  public filterHero(wordToSeach: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${environment.apiUrl}/heroes`)
      .pipe(
        map((heroes: Hero[]) => heroes.filter(
          (heroes: Hero) => heroes.name.toLowerCase().includes(wordToSeach.toLocaleLowerCase()))
        )
      )
  }
}

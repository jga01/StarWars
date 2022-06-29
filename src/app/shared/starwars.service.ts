import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, switchMap, map, of, from, concatAll, concat, observable } from 'rxjs';
import { CompleteResult, ICharacters, ICharactersResponse, IFilm, IFilmsResponse, IPlanet, IPlanetsResponse } from './IStarWars';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor(private http: HttpClient) { }

  getFilmData(): Observable<IFilmsResponse> {
    return this.http.get<IFilmsResponse>('https://swapi.dev/api/films/');
  }

  getCharactersData(): Observable<Array<ICharacters>> {
    const pages: Array<Observable<Array<ICharacters>>> = [];
    for (let i = 1; i < 10; i++) {
      pages.push(this.http.get<{ results: Array<ICharacters> }>(`https://swapi.dev/api/people/?page=${i}`).pipe(map(({ results }) => results)));
    }

    const allPages$: Observable<Array<Array<ICharacters>>> = forkJoin(pages);
    const singleLargePage$: Observable<Array<ICharacters>> = allPages$.pipe(map(allPages => allPages.flat(1)));
    return singleLargePage$;
  }

  getPlanetData(): Observable<Array<IPlanet>> {
    const pages: Array<Observable<Array<IPlanet>>> = [];
    for (let i = 1; i < 5; i++) {
      pages.push(this.http.get<{ results: Array<IPlanet> }>(`https://swapi.dev/api/planets/?page=${i}`).pipe(map(({ results }) => results)));
    }

    const allPages$: Observable<Array<Array<IPlanet>>> = forkJoin(pages);
    const singleLargePage$: Observable<Array<IPlanet>> = allPages$.pipe(map(allPages => allPages.flat(1)));
    return singleLargePage$;
  }

  getCompleteResult(id: string | null): Observable<CompleteResult> {
    return this.http.get<IFilm>(`https://swapi.dev/api/films/${id}`).pipe(switchMap(movie => {
      return forkJoin(movie.characters.map(url => this.http.get<ICharacters>(url))).pipe(map(characters => ({movie, characters})))
    }))
  }
}

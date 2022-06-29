import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IFilm } from 'src/app/shared/IStarWars';
import { StarwarsService } from 'src/app/shared/starwars.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private http: HttpClient, private sws: StarwarsService) {}

  movieData$!: Observable<IFilm[]>;

  ngOnInit(): void {
    this.movieData$ = this.sws.getFilmData()
    .pipe(map(response => response.results));
  }

}

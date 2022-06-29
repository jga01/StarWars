import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompleteResult } from 'src/app/shared/IStarWars';
import { StarwarsService } from 'src/app/shared/starwars.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient, private sws: StarwarsService) { }

  id!: string | null;

  movieResult$!: Observable<CompleteResult>;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");

    this.movieResult$ = this.sws.getCompleteResult(this.id);
  }

}

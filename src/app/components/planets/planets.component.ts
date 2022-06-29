import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPlanet } from 'src/app/shared/IStarWars';
import { StarwarsService } from 'src/app/shared/starwars.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private sws: StarwarsService) { }

  planetData$: Observable<IPlanet[]> | undefined;

  ngOnInit(): void {
    this.planetData$ = this.sws.getPlanetData();
  }

}

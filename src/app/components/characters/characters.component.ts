import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICharacters, ICharactersResponse } from 'src/app/shared/IStarWars';
import { StarwarsService } from 'src/app/shared/starwars.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private sws: StarwarsService) { }

  characterData$: Observable<ICharacters[]> | undefined;

  ngOnInit(): void {
    this.characterData$ = this.sws.getCharactersData();
  }

}

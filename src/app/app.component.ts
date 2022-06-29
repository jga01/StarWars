import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from '@angular/material/icon';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StarWars';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, public router: Router) {
    this.matIconRegistry.addSvgIcon(
      `twitter`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/twitter.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/github.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "instagram",
      this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/instagram.svg")
    );
  }
}

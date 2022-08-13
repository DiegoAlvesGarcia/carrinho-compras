import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivationEnd, Data, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  etapaAtual: boolean;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.observeRouterEvents();
  }

  private observeRouterEvents() {
    this.router.events
      .pipe(
        filter(e => e instanceof ActivationEnd),
        map((e: ActivationEnd) => e.snapshot.data)
      )
      .subscribe(data => this.setRouteValues(data))
  }

  private setRouteValues(data: Data) {
    this.etapaAtual = data.etapaAtual;
  }
}

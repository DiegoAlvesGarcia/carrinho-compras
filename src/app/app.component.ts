import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Data, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  etapaAtual: string;
  numeroSteps: string;
  arraySteps = [] 

  constructor(
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
    this.numeroSteps = data.numeroSteps;
    let i = 1;

    for (let index = 0; index < Number(this.numeroSteps); index++) { 
      if (i < Number(this.etapaAtual)) {
        this.arraySteps[index] = 'previous_step'
      } else {
        this.arraySteps[index] = i;
      }
      i++
    }
    console.log('this.arraySteps ->', this.arraySteps)
  }
}

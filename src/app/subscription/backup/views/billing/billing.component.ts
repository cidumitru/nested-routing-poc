import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.pipe(
      take(1),
      filter(value => Object.keys(value).length === 0),
      tap(() => this.addQueryParams())
    ).subscribe();
  }

  ngOnInit(): void {
  }

  addQueryParams() {
    this.router.navigate([], {
      queryParams: {
        clientId: 'someClientId',
        date1: 'dateValue'
      },
      queryParamsHandling: 'merge',
    });
  }

}

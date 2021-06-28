import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
     timer(2000).pipe(
      take(1)
      ).subscribe(_ => {
        this.router.navigate(['/home']);

      })
  }

}

import { trigger, transition, style, animate, query, animateChild, group } from '@angular/animations';


export const loginAnimation = trigger('loginAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
    }),
    group([
      query('@buttonAnimation', animateChild()),
      animate(
        '1000ms 100ms ease',
        style({
          opacity: 1,
        })
      ),
    ]),
  ]),
]);
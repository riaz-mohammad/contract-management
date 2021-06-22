import { animate } from '@angular/animations';
import { query, style, transition } from '@angular/animations';
import { trigger } from '@angular/animations';


export const routeAnimation = trigger('routeAnimation', [
  transition('home => *', [
    query(
      ':leave',
      [
        style({
          transform: 'translateY(0%)',
        }),
      ],
      { optional: true }
    ),

    query(':enter', [
      animate(
        '500ms ease',
        style({
          transform: 'translateY(-100%)',
        })
      )
    ], {optional: true})


  ])
]);
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

export const cardAnimation = trigger('cardAnimation', [
  transition(':enter', [
    query('.card', [
      style({
        position: 'relative',
        opacity: 0,
        transform: 'translateY(100%)'
      })
    ], { optional: true }),
    
    query('.card', stagger('300ms', [
      animate('1000ms 200ms ease', style({
        opacity: 1,
        transform: 'translateY(0%)'
      }))

    ]), {optional: true})
  ])
]);
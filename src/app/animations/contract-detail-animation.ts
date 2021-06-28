import { trigger, transition, style, animate } from '@angular/animations';


export const contractDetail = trigger('contractDetail', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100%)'
    }),

    animate('800ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ])
]);
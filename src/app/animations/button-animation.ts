import { trigger, transition, style, animate } from '@angular/animations';



export const advisorButtonAnimation = trigger('advisorButtonAnimation', [
  transition(':enter', [
    style({
      opacity: 0
    }),

    animate(
      '6000ms ease',
      style({
        opacity: 1,
      })
    ),
  ]),
]);
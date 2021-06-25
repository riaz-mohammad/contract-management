import { trigger, transition, style, animate } from '@angular/animations';



export const buttonAnimation = trigger('buttonAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(150%)'
    }),

    animate('1000ms 200ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ])
]);



export const titleAnimation = trigger('titleAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)',
    }),

    animate(
      '1000ms ease',  style({
        opacity: 1,
        transform: 'translateX(0%)',
      })
    ),
  ]),
]);


export const fadeOut = trigger('fadeOut', [
  transition(':enter', [
    style({
      opacity: 0,
    }),

    animate(
      '1000ms 500ms ease',
      style({
        opacity: 1,
      })
    ),
  ]),
]); 
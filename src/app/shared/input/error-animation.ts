import { trigger, transition, style, animate } from '@angular/animations';


export const errorAnimation = trigger('errorAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100%)'
    }),

    animate('400ms ease', style({
      opacity: 1,
      transform: 'translateX(0%)'
    }))
  ]),

  transition(':leave', [
    animate('400ms ease', style({
      opacity: 0,
      transform: 'translateX(100%)'

    }))
  ])
]);



export const showPasswordAnimation = trigger('showPasswordAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),

    animate('400ms', style({
      opacity: 1,
      transform: 'translateX(0%)'
    }))
  ])
]);
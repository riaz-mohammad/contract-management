import { animate, group } from '@angular/animations';
import { query, style, transition } from '@angular/animations';
import { trigger } from '@angular/animations';


export const routeAnimation = trigger('routeAnimation', [
  transition('home => registration, registration => client, client => advisor', [
   
    query(':enter, :leave', [
      style({position: 'absolute'})
    ], {optional: true}),

    query(':enter', [
      style({transform: 'translateX(100%)'})
    ], { optional: true }),
    
    group([
      query(':enter', [
        animate('800ms ease', style({
          transform: 'translateX(0%)'
        }))
      ], { optional: true }),
      
      query(':leave', [
        animate('800ms ease', style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }))
      ], {optional: true})
    ])
  ]),

  transition('advisor => client, client => registration, registration => home', [
    query(':enter, :leave', [
      style({position: 'absolute'})
    ], { optional: true }),
    
    query(':enter', [
      style({transform: 'translateX(-100%)'})
    ], { optional: true }),
    
    group([
      query(':enter', [
        animate('800ms ease', style({
          transform: 'translateX(0%)'
        }))
      ], { optional: true }),
      
      query(':leave', [
        animate('800ms ease', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ], {optional: true})
    ])
  ])

]);
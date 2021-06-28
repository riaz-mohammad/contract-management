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

  transition(`advisor => client, client => registration, registration => home,
              advisor => home, client => home`, [
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
  ]),

  transition(`home => contracts, home => advisors, home => clients, 
              contracts <=> advisors, contracts <=> clients,
              clients <=> advisors, registration <=> contracts,
              registration <=> clients, registration <=> advisors,
              advisor => contracts`, [
    
    query(':enter, leave', [
      style({
        position: 'absolute'
      })
    ], { optional: true }),

    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(100%)'
      })
    ], { optional: true }),
    
    group([
      query(':enter', [
        animate('800ms ease', style({
          opacity: 1,
          transform: 'translateY(0)'
        }))
      ], { optional: true }),
      
      query(':leave', [
        animate('400ms ease', style({
          opacity: 0
        }))
      ], {optional: true})
    ])

  ])



]);
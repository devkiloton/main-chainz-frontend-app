import { animate, style, transition, trigger } from '@angular/animations';

export const fader = trigger('fader', [
  transition(':enter', [style({ opacity: 0 }), animate('200ms', style({ opacity: 1 }))]),
  transition(':leave', [animate('200ms', style({ opacity: 0 }))]),
]);

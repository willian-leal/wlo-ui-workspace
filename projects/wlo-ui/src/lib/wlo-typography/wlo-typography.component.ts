import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyVariant, TypographyTag } from './wlo-typography.types';


@Component({
  selector: 'wlo-typography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wlo-typography.component.html',
  styleUrls: ['./wlo-typography.component.scss']
})
export class WloTypographyComponent {
  @Input() text: string = '';
  @Input() tag: TypographyTag = 'p';
  @Input() variant: TypographyVariant = 'p';

  get classes(): string[] {
    return ['wlo-typography', `wlo-typography--${this.variant}`];
  }
}

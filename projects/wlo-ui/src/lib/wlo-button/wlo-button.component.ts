import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WloButtonSize, WloButtonType, WloButtonVariant } from './wlo-button.types';

@Component({
  selector: 'wlo-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wlo-button.component.html',
  styleUrls: ['./wlo-button.component.scss']
})
export class WloButtonComponent implements OnInit {
  @Input() label?: string;
  @Input() variant: WloButtonVariant = 'primary';
  @Input() size: WloButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: WloButtonType = 'button';
  @Input() icon?: string;
  @Input() iconSrc?: string;
  @Input() href?: string;
  @Input() iconOnly = false;

  @Output() clicked = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.iconOnly && this.label) {
      console.warn(
        '[WloButton] Você está usando variant="icon" e também passou label. A label será ignorada.'
      );
    }
  
    if (this.icon && this.iconSrc) {
      console.warn(
        '[WloButton] Você forneceu ambos icon e iconSrc. Por favor, utilize apenas um deles para evitar inconsistências.'
      );
    }
  }

  handleClick(event: Event): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.clicked.emit();
  }

  get classes(): string[] {
    return [
      'wlo-btn',
      `wlo-btn--${this.variant}`,
      `wlo-btn--${this.size}`,
      this.disabled ? 'wlo-btn--disabled' : '',
      this.loading ? 'wlo-btn--loading' : '',
      this.iconOnly ? 'wlo-btn--icon' : ''
    ].filter(Boolean);
  }
  
  get shouldShowLabel(): boolean {
    return !this.iconOnly && !!this.label;
  }
}

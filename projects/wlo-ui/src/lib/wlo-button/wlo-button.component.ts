import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WloButtonSize, WloButtonType, WloButtonVariant } from './wlo-button.types';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'wlo-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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

  constructor(private translate: TranslateService) {}

  @Output() clicked = new EventEmitter<void>();

  ngOnInit(): void {
    if (this.iconOnly && this.label) {
      console.warn(
        `[WloButton] ${this.translate.instant('wloButton.warning.iconOnlyWithLabel')}`
      );
    }
  
    if (this.icon && this.iconSrc) {
      console.warn(
        `[WloButton] ${this.translate.instant('wloButton.warning.iconAndIconSrc')}`
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

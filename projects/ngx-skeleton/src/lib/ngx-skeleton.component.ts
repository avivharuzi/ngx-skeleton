import { Component, Input } from '@angular/core';

import { Variant } from './shared/variant.enum';

@Component({
  selector: 'ngx-skeleton',
  templateUrl: './ngx-skeleton.component.html',
  styleUrls: ['./ngx-skeleton.component.scss']
})
export class NgxSkeletonComponent {
  @Input() animate: boolean;
  @Input() backgroundColor: string;
  @Input() height: number | string;
  @Input() variant: Variant;
  @Input() width: number | string;

  constructor() {
    this.animate = true;
    this.variant = Variant.Text;
  }

  getClasses(): string {
    return `ngx-skeleton ${this.getVariantClass()} ${this.getAnimateClass()}`;
  }

  getVariantClass(): string {
    switch (this.variant) {
      case Variant.Text:
        return 'ngx-skeleton-text';
      case Variant.Circle:
        return 'ngx-skeleton-circle';
      case Variant.Rect:
      default:
        return '';
    }
  }

  getAnimateClass(): string {
    return this.animate ? 'ngx-skeleton-animate' : '';
  }

  getHeight() {
    const height = +this.height;
    return isNaN(height) ? this.height : `${this.height}px`;
  }

  getWidth() {
    const width = +this.width;
    return isNaN(width) ? this.width : `${this.width}px`;
  }
}

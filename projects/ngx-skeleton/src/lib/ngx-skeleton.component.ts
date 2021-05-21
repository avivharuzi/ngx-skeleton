import { Component, Input } from '@angular/core';

import { defaults } from './shared/defaults';
import { Variant } from './shared/variant.enum';

@Component({
  selector: 'ngx-skeleton',
  templateUrl: './ngx-skeleton.component.html',
  styleUrls: ['./ngx-skeleton.component.scss'],
})
export class NgxSkeletonComponent {
  @Input() animate: boolean;
  @Input() backgroundColor: string;
  @Input() borderRadius: number | string;
  @Input() height: number | string;
  @Input() margin: number | string;
  @Input() variant: Variant;
  @Input() width: number | string;

  constructor() {
    this.animate = defaults.animate;
    this.backgroundColor = defaults.backgroundColor;
    this.borderRadius = defaults.borderRadius;
    this.height = defaults.height;
    this.margin = defaults.margin;
    this.variant = defaults.variant;
    this.width = defaults.width;
  }

  getBorderRadius(): number | string {
    return this.variant === Variant.Circle &&
      this.borderRadius === defaults.borderRadius
      ? '50%'
      : this.borderRadius;
  }

  getHeight(): number | string {
    const height = +this.height;
    return isNaN(height) ? this.height : `${this.height}px`;
  }

  getWidth(): number | string {
    const width = +this.width;
    return isNaN(width) ? this.width : `${this.width}px`;
  }
}

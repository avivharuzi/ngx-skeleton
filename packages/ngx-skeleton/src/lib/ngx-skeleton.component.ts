import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ngxSkeletonDefaults } from './ngx-skeleton-defaults';
import { NgxSkeletonVariant } from './ngx-skeleton-variant';

@Component({
  standalone: true,
  selector: 'ngx-skeleton',
  templateUrl: './ngx-skeleton.component.html',
  styleUrls: ['./ngx-skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxSkeletonComponent {
  @Input() animate = ngxSkeletonDefaults.animate;
  @Input() backgroundColor = ngxSkeletonDefaults.backgroundColor;
  @Input() borderRadius: number | string = ngxSkeletonDefaults.borderRadius;
  @Input()
  get height(): number | string {
    return this._height;
  }
  set height(height: number | string) {
    this._height = isNaN(+height) ? height : `${height}px`;
  }
  @Input() margin: number | string = ngxSkeletonDefaults.margin;
  @Input() variant: NgxSkeletonVariant = ngxSkeletonDefaults.variant;
  @Input()
  get width(): number | string {
    return this._width;
  }
  set width(width: number | string) {
    this._width = isNaN(+width) ? width : `${width}px`;
  }

  private _height: number | string = ngxSkeletonDefaults.height;
  private _width: number | string = ngxSkeletonDefaults.width;

  getBorderRadius(): number | string {
    return this.variant === 'circle' &&
      this.borderRadius === ngxSkeletonDefaults.borderRadius
      ? '50%'
      : this.borderRadius;
  }
}

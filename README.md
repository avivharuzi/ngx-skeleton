# ngx-skeleton

Angular placeholder preview component before the content is loaded.

![npm](https://img.shields.io/npm/v/ngx-skeleton) ![NPM](https://img.shields.io/npm/l/ngx-skeleton) ![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-skeleton)

## Environment Support

- Angular 6+
- Server-side Rendering

## Compatibility

Versions compatibility list:

| ngx-skeleton | Angular       |
| ------------ | ------------- |
| 16.x.x       | 16.x.x        |
| 15.x.x       | 15.x.x        |
| 14.x.x       | 14.x.x        |
| 13.x.x       | 13.x.x        |
| 12.x.x       | 12.x.x        |
| 11.x.x       | 11.x.x        |
| 1.x.x        | 6.xx - 10.x.x |

## Installation

```sh
npm i ngx-skeleton
```

OR

```sh
yarn install ngx-skeleton
```

## Demo

[Demo page](https://avivharuzi.github.io/ngx-skeleton)

## Usage

Import `NgxSkeletonModule` into the current module's imports:

```ts
import { NgxSkeletonModule } from 'ngx-skeleton';

imports: [
  // ...
  NgxSkeletonModule,
],
```

You can also import `NgxSkeletonComponent` as standalone component:

```ts
import { NgxSkeletonComponent } from 'ngx-skeleton';

@Component({
  standalone: true,
  imports: [NgxSkeletonComponent],
  // ...
})
export class MyComponent {}
```

Use in your components (this is code example from demo page):

```html
<ng-container *ngIf="!isLoading; else loadingContent">
  <h5>{{ movie.title }}</h5>
  <h6 class="text-black-50">{{ movie.date }}</h6>
</ng-container>
<ng-template #loadingContent>
  <ngx-skeleton height="24px" margin="0 0 8px 0" width="50%"></ngx-skeleton>
  <ngx-skeleton height="19px" margin="0 0 8px 0"></ngx-skeleton>
</ng-template>
```

## API

### Inputs

| Input             | Type                   | Default                 |
| ----------------- | ---------------------- | ----------------------- |
| `animate`         | boolean                | `true`                  |
| `backgroundColor` | string                 | `'rgba(0, 0, 0, 0.08)'` |
| `borderRadius`    | number &#124; string   | `0`                     |
| `height`          | number &#124; string   | `'100%'`                |
| `margin`          | number &#124; string   | `0`                     |
| `variant`         | `'rect'` or `'circle'` | `'rect'`                |
| `width`           | number &#124; string   | `'100%'`                |

# License

[MIT](LICENSE)

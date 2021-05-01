# ngx-skeleton

Angular placeholder preview component before the content is loaded.

![npm](https://img.shields.io/npm/v/ngx-skeleton) ![NPM](https://img.shields.io/npm/l/ngx-skeleton) ![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-skeleton)

## Environment Support

* Angular 6+
* Server-side Rendering

## Compatibility

Versions compatibility list:

| ngx-skeleton | Angular       |
| ------------ | ------------- |
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
| `animate`         | Boolean                | `true`                  |
| `backgroundColor` | String                 | `'rgba(0, 0, 0, 0.08)'` |
| `borderRadius`    | Number or String       | `0`                     |
| `height`          | Number or String       | `'100%'`                |
| `margin`          | Number or String       | `0`                     |
| `variant`         | `'rect'` or `'circle'` | `'rect'`                |
| `width`           | Number or String       | `'100%'`                |

# License

[MIT](LICENSE)

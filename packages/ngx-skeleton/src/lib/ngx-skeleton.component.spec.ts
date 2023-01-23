import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxSkeletonComponent } from './ngx-skeleton.component';

describe('NgxSkeletonComponent', () => {
  let component: NgxSkeletonComponent;
  let fixture: ComponentFixture<NgxSkeletonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxSkeletonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

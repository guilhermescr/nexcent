import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexcentBlogComponent } from './nexcent-blog.component';

describe('NexcentBlogComponent', () => {
  let component: NexcentBlogComponent;
  let fixture: ComponentFixture<NexcentBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NexcentBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NexcentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

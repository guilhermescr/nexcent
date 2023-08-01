import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnseenAtNexcentComponent } from './unseen-at-nexcent.component';

describe('UnseenAtNexcentComponent', () => {
  let component: UnseenAtNexcentComponent;
  let fixture: ComponentFixture<UnseenAtNexcentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnseenAtNexcentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnseenAtNexcentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

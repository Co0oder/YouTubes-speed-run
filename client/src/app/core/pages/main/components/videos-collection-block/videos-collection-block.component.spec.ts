import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCollectionBlockComponent } from './videos-collection-block.component';

describe('VideosCollectionBlockComponent', () => {
  let component: VideosCollectionBlockComponent;
  let fixture: ComponentFixture<VideosCollectionBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosCollectionBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCollectionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

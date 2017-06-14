import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEntertainmentComponent } from './find-entertainment.component';

describe('FindEntertainmentComponent', () => {
  let component: FindEntertainmentComponent;
  let fixture: ComponentFixture<FindEntertainmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindEntertainmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

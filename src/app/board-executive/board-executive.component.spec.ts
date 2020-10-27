import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardExecutiveComponent } from './board-executive.component';

describe('BoardExecutiveComponent', () => {
  let component: BoardExecutiveComponent;
  let fixture: ComponentFixture<BoardExecutiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardExecutiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

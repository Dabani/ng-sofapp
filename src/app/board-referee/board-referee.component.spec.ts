import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRefereeComponent } from './board-referee.component';

describe('BoardRefereeComponent', () => {
  let component: BoardRefereeComponent;
  let fixture: ComponentFixture<BoardRefereeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardRefereeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

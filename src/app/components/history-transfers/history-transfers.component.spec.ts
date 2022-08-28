import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTransfersComponent } from './history-transfers.component';

describe('HistoryTransfersComponent', () => {
  let component: HistoryTransfersComponent;
  let fixture: ComponentFixture<HistoryTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryTransfersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

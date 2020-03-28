import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelpipContentComponent } from './celpip-content.component';

describe('CelpipContentComponent', () => {
  let component: CelpipContentComponent;
  let fixture: ComponentFixture<CelpipContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelpipContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelpipContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PteContentComponent } from './pte-content.component';

describe('PteContentComponent', () => {
  let component: PteContentComponent;
  let fixture: ComponentFixture<PteContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PteContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PteContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

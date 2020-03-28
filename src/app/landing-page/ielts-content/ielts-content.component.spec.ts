import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IeltsContentComponent } from './ielts-content.component';

describe('IeltsContentComponent', () => {
  let component: IeltsContentComponent;
  let fixture: ComponentFixture<IeltsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IeltsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IeltsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

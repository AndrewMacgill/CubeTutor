import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OllAlgsComponent } from './oll-algs.component';

describe('OllAlgsComponent', () => {
  let component: OllAlgsComponent;
  let fixture: ComponentFixture<OllAlgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OllAlgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OllAlgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

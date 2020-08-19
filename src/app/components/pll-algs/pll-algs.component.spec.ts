import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PllAlgsComponent } from './pll-algs.component';

describe('PllAlgsComponent', () => {
  let component: PllAlgsComponent;
  let fixture: ComponentFixture<PllAlgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PllAlgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PllAlgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PllAlgDetailsComponent } from './pll-alg-details.component';

describe('PllAlgDetailsComponent', () => {
  let component: PllAlgDetailsComponent;
  let fixture: ComponentFixture<PllAlgDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PllAlgDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PllAlgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

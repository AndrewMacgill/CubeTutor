import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OllAlgDetailsComponent } from './oll-alg-details.component';

describe('OllAlgDetailsComponent', () => {
  let component: OllAlgDetailsComponent;
  let fixture: ComponentFixture<OllAlgDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OllAlgDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OllAlgDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

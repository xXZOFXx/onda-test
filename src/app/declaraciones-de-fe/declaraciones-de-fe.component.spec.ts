import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracionesDeFeComponent } from './declaraciones-de-fe.component';

describe('DeclaracionesDeFeComponent', () => {
  let component: DeclaracionesDeFeComponent;
  let fixture: ComponentFixture<DeclaracionesDeFeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclaracionesDeFeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclaracionesDeFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

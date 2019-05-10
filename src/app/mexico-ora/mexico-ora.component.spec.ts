import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MexicoOraComponent } from './mexico-ora.component';

describe('MexicoOraComponent', () => {
  let component: MexicoOraComponent;
  let fixture: ComponentFixture<MexicoOraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MexicoOraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MexicoOraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDeIsraelComponent } from './noticias-de-israel.component';

describe('NoticiasDeIsraelComponent', () => {
  let component: NoticiasDeIsraelComponent;
  let fixture: ComponentFixture<NoticiasDeIsraelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDeIsraelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasDeIsraelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

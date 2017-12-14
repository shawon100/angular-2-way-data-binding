import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustgageComponent } from './justgage.component';

describe('JustgageComponent', () => {
  let component: JustgageComponent;
  let fixture: ComponentFixture<JustgageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustgageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustgageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

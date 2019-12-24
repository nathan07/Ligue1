import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorersPage } from './scorers.page';

describe('ScorersPage', () => {
  let component: ScorersPage;
  let fixture: ComponentFixture<ScorersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

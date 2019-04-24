import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsUserComponent } from './forms-user.component';

describe('FormsUserComponent', () => {
  let component: FormsUserComponent;
  let fixture: ComponentFixture<FormsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

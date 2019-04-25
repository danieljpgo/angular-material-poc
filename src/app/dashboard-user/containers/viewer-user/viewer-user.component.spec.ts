import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerUserComponent } from './viewer-user.component';

describe('ViewerUserComponent', () => {
  let component: ViewerUserComponent;
  let fixture: ComponentFixture<ViewerUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewerUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

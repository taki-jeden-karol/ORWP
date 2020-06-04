import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneSickListComponent } from './one-sick-list.component';

describe('OneSickListComponent', () => {
  let component: OneSickListComponent;
  let fixture: ComponentFixture<OneSickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneSickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneSickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

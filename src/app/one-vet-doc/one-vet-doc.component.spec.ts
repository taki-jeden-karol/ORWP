import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneVetDocComponent } from './one-vet-doc.component';

describe('OneVetDocComponent', () => {
  let component: OneVetDocComponent;
  let fixture: ComponentFixture<OneVetDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneVetDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneVetDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

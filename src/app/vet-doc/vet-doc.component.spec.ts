import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetDocComponent } from './vet-doc.component';

describe('VetDocComponent', () => {
  let component: VetDocComponent;
  let fixture: ComponentFixture<VetDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

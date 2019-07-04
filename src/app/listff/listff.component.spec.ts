import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListffComponent } from './listff.component';

describe('ListffComponent', () => {
  let component: ListffComponent;
  let fixture: ComponentFixture<ListffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

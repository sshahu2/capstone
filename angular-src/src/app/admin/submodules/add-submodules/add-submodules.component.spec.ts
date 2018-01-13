import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubmodulesComponent } from './add-submodules.component';

describe('AddSubmodulesComponent', () => {
  let component: AddSubmodulesComponent;
  let fixture: ComponentFixture<AddSubmodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubmodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

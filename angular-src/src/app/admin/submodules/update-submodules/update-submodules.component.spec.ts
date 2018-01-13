import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubmodulesComponent } from './update-submodules.component';

describe('UpdateSubmodulesComponent', () => {
  let component: UpdateSubmodulesComponent;
  let fixture: ComponentFixture<UpdateSubmodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSubmodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSubmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

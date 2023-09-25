import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInputsComponent } from './register-inputs.component';

describe('RegisterInputsComponent', () => {
  let component: RegisterInputsComponent;
  let fixture: ComponentFixture<RegisterInputsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterInputsComponent]
    });
    fixture = TestBed.createComponent(RegisterInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

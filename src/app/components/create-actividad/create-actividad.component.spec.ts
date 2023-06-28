import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateActividadComponent } from './create-actividad.component';

describe('CreateActividadComponent', () => {
  let component: CreateActividadComponent;
  let fixture: ComponentFixture<CreateActividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateActividadComponent]
    });
    fixture = TestBed.createComponent(CreateActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

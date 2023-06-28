import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrabajadorComponent } from './create-trabajador.component';

describe('CreateTrabajadorComponent', () => {
  let component: CreateTrabajadorComponent;
  let fixture: ComponentFixture<CreateTrabajadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTrabajadorComponent]
    });
    fixture = TestBed.createComponent(CreateTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

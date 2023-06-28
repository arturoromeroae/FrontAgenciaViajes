import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAerolineaComponent } from './create-aerolinea.component';

describe('CreateAerolineaComponent', () => {
  let component: CreateAerolineaComponent;
  let fixture: ComponentFixture<CreateAerolineaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAerolineaComponent]
    });
    fixture = TestBed.createComponent(CreateAerolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

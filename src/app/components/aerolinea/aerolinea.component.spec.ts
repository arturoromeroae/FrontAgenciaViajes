import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AerolineaComponent } from './aerolinea.component';

describe('AerolineaComponent', () => {
  let component: AerolineaComponent;
  let fixture: ComponentFixture<AerolineaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AerolineaComponent]
    });
    fixture = TestBed.createComponent(AerolineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

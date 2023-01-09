import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgattenPasswordComponent } from './forgatten-password.component';

describe('ForgattenPasswordComponent', () => {
  let component: ForgattenPasswordComponent;
  let fixture: ComponentFixture<ForgattenPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgattenPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgattenPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

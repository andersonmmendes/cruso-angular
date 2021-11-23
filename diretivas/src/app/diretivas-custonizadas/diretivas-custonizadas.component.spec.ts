import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustonizadasComponent } from './diretivas-custonizadas.component';

describe('DiretivasCustonizadasComponent', () => {
  let component: DiretivasCustonizadasComponent;
  let fixture: ComponentFixture<DiretivasCustonizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasCustonizadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustonizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

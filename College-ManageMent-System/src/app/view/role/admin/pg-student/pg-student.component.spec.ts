import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgStudentComponent } from './pg-student.component';

describe('PgStudentComponent', () => {
  let component: PgStudentComponent;
  let fixture: ComponentFixture<PgStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

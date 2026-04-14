import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgprogramComponent } from './ugprogram.component';

describe('UgprogramComponent', () => {
  let component: UgprogramComponent;
  let fixture: ComponentFixture<UgprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UgprogramComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

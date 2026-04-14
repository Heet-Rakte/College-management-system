import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryMemberComponent } from './library-member.component';

describe('LibraryMemberComponent', () => {
  let component: LibraryMemberComponent;
  let fixture: ComponentFixture<LibraryMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibraryMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

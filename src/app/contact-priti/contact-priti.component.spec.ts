import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPritiComponent } from './contact-priti.component';

describe('ContactPritiComponent', () => {
  let component: ContactPritiComponent;
  let fixture: ComponentFixture<ContactPritiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPritiComponent]
    });
    fixture = TestBed.createComponent(ContactPritiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

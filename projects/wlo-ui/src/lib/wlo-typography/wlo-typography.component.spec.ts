import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WloTypographyComponent } from './wlo-typography.component';

describe('WloTypographyComponent', () => {
  let component: WloTypographyComponent;
  let fixture: ComponentFixture<WloTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WloTypographyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WloTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

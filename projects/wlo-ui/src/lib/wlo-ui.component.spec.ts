import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WloUiComponent } from './wlo-ui.component';

describe('WloUiComponent', () => {
  let component: WloUiComponent;
  let fixture: ComponentFixture<WloUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WloUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WloUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

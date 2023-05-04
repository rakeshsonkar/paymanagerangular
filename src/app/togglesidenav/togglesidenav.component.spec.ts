import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglesidenavComponent } from './togglesidenav.component';

describe('TogglesidenavComponent', () => {
  let component: TogglesidenavComponent;
  let fixture: ComponentFixture<TogglesidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogglesidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TogglesidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

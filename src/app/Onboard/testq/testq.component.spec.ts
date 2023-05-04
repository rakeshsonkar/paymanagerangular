import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestqComponent } from './testq.component';

describe('TestqComponent', () => {
  let component: TestqComponent;
  let fixture: ComponentFixture<TestqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

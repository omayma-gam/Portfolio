import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprComponent } from './mypr.component';

describe('MyprComponent', () => {
  let component: MyprComponent;
  let fixture: ComponentFixture<MyprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

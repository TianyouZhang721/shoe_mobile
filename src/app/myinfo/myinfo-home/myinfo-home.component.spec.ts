import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyinfoHomeComponent } from './myinfo-home.component';

describe('MyinfoHomeComponent', () => {
  let component: MyinfoHomeComponent;
  let fixture: ComponentFixture<MyinfoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyinfoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyinfoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

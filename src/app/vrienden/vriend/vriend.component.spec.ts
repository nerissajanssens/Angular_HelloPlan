import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VriendComponent } from './vriend.component';

describe('VriendComponent', () => {
  let component: VriendComponent;
  let fixture: ComponentFixture<VriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

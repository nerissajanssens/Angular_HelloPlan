import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollVriendComponent } from './poll-vriend.component';

describe('PollVriendComponent', () => {
  let component: PollVriendComponent;
  let fixture: ComponentFixture<PollVriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollVriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollVriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

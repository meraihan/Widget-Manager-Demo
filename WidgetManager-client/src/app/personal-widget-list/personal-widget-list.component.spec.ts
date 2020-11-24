import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWidgetListComponent } from './personal-widget-list.component';

describe('PersonalWidgetListComponent', () => {
  let component: PersonalWidgetListComponent;
  let fixture: ComponentFixture<PersonalWidgetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalWidgetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalWidgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

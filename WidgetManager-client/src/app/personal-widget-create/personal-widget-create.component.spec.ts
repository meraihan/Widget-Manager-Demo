import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWidgetCreateComponent } from './personal-widget-create.component';

describe('PersonalWidgetCreateComponent', () => {
  let component: PersonalWidgetCreateComponent;
  let fixture: ComponentFixture<PersonalWidgetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalWidgetCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalWidgetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

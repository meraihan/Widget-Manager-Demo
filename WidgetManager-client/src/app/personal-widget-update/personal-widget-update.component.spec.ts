import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalWidgetUpdateComponent } from './personal-widget-update.component';

describe('PersonalWidgetUpdateComponent', () => {
  let component: PersonalWidgetUpdateComponent;
  let fixture: ComponentFixture<PersonalWidgetUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalWidgetUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalWidgetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

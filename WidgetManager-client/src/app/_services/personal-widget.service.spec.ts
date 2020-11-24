import { TestBed } from '@angular/core/testing';

import { PersonalWidgetService } from './personal-widget.service';

describe('PersonalWidgetService', () => {
  let service: PersonalWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

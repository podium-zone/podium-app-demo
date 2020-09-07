import { TestBed } from '@angular/core/testing';

import { FeedPageService } from './feed-page.service';

describe('FeedPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedPageService = TestBed.get(FeedPageService);
    expect(service).toBeTruthy();
  });
});

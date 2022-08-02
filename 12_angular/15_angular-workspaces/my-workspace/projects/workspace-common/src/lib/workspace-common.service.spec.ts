import { TestBed } from '@angular/core/testing';

import { WorkspaceCommonService } from './workspace-common.service';

describe('WorkspaceCommonService', () => {
  let service: WorkspaceCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkspaceCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

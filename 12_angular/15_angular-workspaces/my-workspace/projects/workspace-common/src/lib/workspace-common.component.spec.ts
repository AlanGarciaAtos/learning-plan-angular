import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceCommonComponent } from './workspace-common.component';

describe('WorkspaceCommonComponent', () => {
  let component: WorkspaceCommonComponent;
  let fixture: ComponentFixture<WorkspaceCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkspaceCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkspaceCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

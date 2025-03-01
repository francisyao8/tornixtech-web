import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesAndDocumentationComponent } from './resources-and-documentation.component';

describe('ResourcesAndDocumentationComponent', () => {
  let component: ResourcesAndDocumentationComponent;
  let fixture: ComponentFixture<ResourcesAndDocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesAndDocumentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesAndDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

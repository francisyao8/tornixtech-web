import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebexpressComponent } from './webexpress.component';

describe('WebexpressComponent', () => {
  let component: WebexpressComponent;
  let fixture: ComponentFixture<WebexpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebexpressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebexpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

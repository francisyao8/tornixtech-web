import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpressComponent } from './webpress.component';

describe('WebpressComponent', () => {
  let component: WebpressComponent;
  let fixture: ComponentFixture<WebpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebpressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

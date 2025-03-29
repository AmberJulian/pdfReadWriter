import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFReaderComponent } from './pdfreader.component';

describe('PDFReaderComponent', () => {
  let component: PDFReaderComponent;
  let fixture: ComponentFixture<PDFReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDFReaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDFReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

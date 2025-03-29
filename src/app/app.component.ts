import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PDFReaderComponent } from './pdfreader/pdfreader.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxExtendedPdfViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'pdfReader';
}

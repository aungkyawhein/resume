import { Injectable } from '@angular/core';

declare const html2pdf: () => any;

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  generatePDF(content: HTMLElement, filename: string): void {
    const options = {
      margin: 10,
      filename: filename,
      image: { type: 'png', quality: 1 },
      html2canvas: { scale: 2, scrollX: 0, scrollY: 0 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().from(content).set(options).save();
  }
}

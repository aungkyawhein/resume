import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Injectable({
  providedIn: 'root',
})
export class PdfService {
  generatePDF(content: HTMLElement, filename: string): void {
    html2canvas(content).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');

      doc.addImage(imageData, 'PNG', 10, 10, 190, 0);
      doc.save(filename);
    });
  }
}

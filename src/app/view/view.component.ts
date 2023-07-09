import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactInfo, Education, EmploymentHistory, Intro, Skills } from '../data.model';
import { DataService } from '../data.service';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  @ViewChild('pdfContent') pdfContent!: ElementRef;

  name: string = '';
  jobTitle: string = '';
  logo: string = '';
  contactInfo: ContactInfo = {
    list: [],
  };
  intro: Intro = {
    title: '',
    description: ''
  };
  employmentHistory: EmploymentHistory = {
    title: '',
    list: []
  };
  education: Education = {
    title: '',
    duration: '',
    university: '',
    degree: '',
    extra: ''
  };
  skills: Skills = {
    title: '',
    list: []
  };

  constructor(
    private pdfService: PdfService,
    private dataService: DataService
  ) {

  }

  ngOnInit(): void {
    const {
      name,
      jobTitle,
      logo,
      contactInfo,
      intro,
      employmentHistory,
      education,
      skills
    } = this.dataService.getData();
    this.name = name;
    this.jobTitle = jobTitle;
    this.logo = logo;
    this.contactInfo = contactInfo;
    this.intro = intro;
    this.employmentHistory = employmentHistory;
    this.education = education;
    this.skills = skills;
  }

  generatePDF(): void {
    const pageContent = this.pdfContent.nativeElement;
    const filename = this.name + '.pdf';
    this.pdfService.generatePDF(pageContent, filename);
  }
}

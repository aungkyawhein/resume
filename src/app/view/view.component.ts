import { Component } from '@angular/core';
import { ContactInfo, Education, EmploymentHistory, Intro, Skills } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
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

  constructor(private dataService: DataService) {

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
}

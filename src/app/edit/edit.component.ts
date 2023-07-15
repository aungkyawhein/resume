import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactInfo, Data, Education, EmploymentHistory, Intro, Skills } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  data!: Data;
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
    private dataService: DataService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.data = this.dataService.getData();
    const {
      name,
      jobTitle,
      logo,
      contactInfo,
      intro,
      employmentHistory,
      education,
      skills
    } = this.data;
    this.name = name;
    this.jobTitle = jobTitle;
    this.logo = logo;
    this.contactInfo = contactInfo;
    this.intro = intro;
    this.employmentHistory = employmentHistory;
    this.education = education;
    this.skills = skills;
  }

  onSubmit(): void {
    this.dataService.setData(
      {
        ...this.data,
        name: this.name,
        jobTitle: this.jobTitle,
      }
    );
    this.goToView();
  }

  goToView(): void {
    this.router.navigate(['/view']);
  }
}

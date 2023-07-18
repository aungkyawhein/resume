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
  skillsList = '';

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
    this.intro = { ...intro };
    this.employmentHistory = employmentHistory;
    this.education = { ...education };
    this.skills = { ...skills };
    this.skillsList = this.skills.list.join(',');
  }

  onSkillsUpdate(): void {
    this.skills.list = this.skillsList.split(',');
  }

  onSubmit(): void {
    this.dataService.setData(
      {
        ...this.data,
        name: this.name,
        jobTitle: this.jobTitle,
        intro: { ...this.intro },
        education: { ...this.education },
        skills: { ...this.skills },
      }
    );
    this.goToView();
  }

  goToView(): void {
    this.router.navigate(['/view']);
  }
}

export interface Data {
  name: string;
  jobTitle: string;
  logo: string;
  contactInfo: ContactInfo;
  intro: Intro;
  employmentHistory: EmploymentHistory;
  education: Education;
  skills: Skills;
}

export interface Contact {
  name: string;
  value: string;
}

export interface ContactInfo {
  list: Contact[];
}

export interface Intro {
  title: string;
  description: string;
}

export interface Employment {
  duration: string;
  jobTitle: string;
  responsibilities: string;
}

export interface EmploymentHistory {
  title: string;
  list: Employment[];
}

export interface Education {
  title: string;
  duration: string;
  university: string;
  degree: string;
  extra: string;
}

export interface Skills {
  title: string;
  list: string[];
}

import { Component, OnInit } from '@angular/core';

export const devSkills = [
  'Pascal', 'Smalltalk', '.NET Framework', 'Python',
  'HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Material Design',
  'Design', 'Angular', 'Vue.Js', 'R Studio', 'PostGreSQL',
  'MongoDB', 'Celery', 'Redis', 'Swagger', 'XAMPP',
  'AutoCad', 'Maple', 'Office', 'Astah'
];


@Component({
  standalone: false,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  age = 0;
  birthDate = new Date(1994, 10, 12);
  skills = devSkills;
  constructor() { }

  ngOnInit() {
    this.calculateAge();
  }

  calculateAge() {
    const ageDifMs = Date.now() - this.birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    this.age =  Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}

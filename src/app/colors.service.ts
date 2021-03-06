import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Posts } from './posts';
import { Observable, from } from 'rxjs';
import { defineBase } from '@angular/core/src/render3';


@Injectable({
  providedIn: 'root'
})

export class ColorsService {
  data: any; 
  constructor(public http: HttpClient) {  }

getData() {
//   return this.data = {
//     name: 'K Lakshmi Deepak',
//     position: 'UI Developer',
//     about: 'My name is Lakshmi Deepak. I\'m a Front End Developer in Hyderabad. I describe myself as a developer who loves coding, open source, and the web platform. Currently I\'m working at a company called TechStar Group, as a Front End Developer (often called as UI Developer).',
//     quality:
//     [{title: 'Hard Work', desc: 'I want to make my life life better along with and other\'s life, with my nature of hardworking brain.'},
//     {title: 'Time Punctual', desc: 'Instead of Being Late I Choose to Plan the things and do accordingly , so that I can Manage the time in peaceful environment.'},
//     {title: 'Tech Enthusiast', desc: 'Technology can change lot of things like shopping , health care etc. reading different blogs , magazines boosted my love towards it.'},
//     ],

//     skills: [{title: 'html', desc: 95},
//      {title: 'css', desc: 95},
//      {title: 'js', desc: 90},
//      {title: 'bootstrap', desc: 85},
//      {title: 'git', desc: 70},
//      {title: 'php', desc: 70},
//      {title: 'mysql', desc: 70},
//      {title: 'typescript', desc: 70},
//      {title: 'angular', desc: 50}
//     ],

//     experience:
//     [{title: 'UI Developer', desc: 'I\'m working at a company called TechStar Group, as a Front End Developer (often called as UI Developer).'},
//      {title: 'Video Editor', desc: 'I worked in an organization called Anjaneya Digitals which has some news channels (SYC News, Bhavitha TV)as Video Editor for a year.'},
//      {title: 'Customer Relationship Officer', desc: 'I worked in Hinduja Global Solutions (HGS) as customer relationship officer for 11 months.'},
//     ],

//     education:
//   [{title: 'Post Graduation', course: 'MCA', syear: 2014, eyear: 2017, percent: 76, website: 'http://www.rvrjcce.ac.in/', desc: 'Completed My Post Graduation in Master of Computer Applications in RVR & JC College of Engineering under Acharya Nagarjuna University by scoring 76% of marks on 2017.'},
// {title: 'Graduation', course: 'B.Sc', syear: 2012, eyear: 2009, percent: 64.5, website: 'https://hcg.ac.in/', desc: 'Completed My Graduation in Bachelor of Science in Hindu College under Acharya Nagarjuna University by scoring 64.5%% of marks on 2012.'},
// {title: 'Intermediate', course: 'MPC', syear: 2007, eyear: 2009, percent: 76, website: 'http://www.andhramuslimcollege.org/', desc: 'Completed My Intermediate in M.P.C in Andhra Muslim college under Board of Intermediate Education of AP by scoring 71.3% of marks on 2009.'},
// {title: 'Higher Education', course: 'SSC', syear: 2006, eyear: 2007, percent: 76, website: '#', desc: 'Completed My Higher Education in Vijaya Lakshmi Public School under AP Board of Secondary Education by scoring 79.6% of marks on 2007.'},
//   ],

//     contact:
//     { address: 'Ramanamakshetram 3rd line, Guntur',
//       website: 'https://luckkey005.github.io/first-ang/',
//       mail: 'luckkey005@gmail.com',
//       mobile: '',
//       social1: 'https://www.facebook.com/deepak.lakshmi.39',
//       social2: 'https://www.youtube.com/deepaktips',
//       timing: 'Mon to Sat: 09:30 AM - 09.30 PM',
//     },    };

// return this.data;
return this.http.get('https://raw.githubusercontent.com/luckkey005/first-ang/master/src/assets/kld.json');
}

}
